import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ImageDetailScreen = ({ route, navigation }) => {
  const { id, image, description, author, genres, file, classification } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.wrapper}>
        <ScrollView scrollEnabled={true} style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </ScrollView>

        <LinearGradient
          style={styles.gradient}
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)']}
          pointerEvents="none">
          <View style={styles.shadowView} />
        </LinearGradient>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Leitura', {
            file: file
          })}>
          <Text style={styles.btnText}>Ler agora</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.bookInfo}>
          <Text style={styles.label}>Autor:</Text>
          <Text style={styles.value}>{author}</Text>
        </View>

        <View style={styles.bookInfo}>
          <Text style={styles.label}>Gêneros:</Text>
          <Text style={styles.value}>{genres}</Text>
        </View>

        <View style={styles.bookInfo}>
          <Text style={styles.label}>Classificação:</Text>
          <Text style={styles.value}>{classification}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    margin: 15,
    flex: 1,
    width: '85%',
    position: 'relative',
  },
  descriptionContainer: {
    backgroundColor: '#252525',
    borderRadius: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  shadowView: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  description: {
    textAlign: 'justify',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  info: {
    width: '85%',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
  bookInfo: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    color: '#ff7424',
  },
  value: {
    fontSize: 16,
    padding: 5,
    color: '#fff',
  },

  btn: {
    width: '75%',
    backgroundColor: '#b14100',
    padding: 5,
    marginRight: 5,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ImageDetailScreen;
