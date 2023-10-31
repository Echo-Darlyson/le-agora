import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from './FirebaseDB';

const SettingsScreen = ({ navigation }) => {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate('Login');
    }).catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Icon name="gear" size={25} color="#b14100" />
        <View>
          <Text style={styles.btnTitle}>Geral</Text>
          <Text style={styles.btnText}>Configurações gerais</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Icon name="pencil" size={25} color="#b14100" />
        <View>
          <Text style={styles.btnTitle}>Preferências</Text>
          <Text style={styles.btnText}>Manusear preferências</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Icon name="trophy" size={25} color="#b14100" />
        <View>
          <Text style={styles.btnTitle}>Medalhas</Text>
          <Text style={styles.btnText}>Manusear conquistas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Icon name="book" size={25} color="#b14100" />
        <View>
          <Text style={styles.btnTitle}>Meus livros</Text>
          <Text style={styles.btnText}>Favoritos | Adicionados</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Icon name="info-circle" size={25} color="#b14100" />
        <View>
          <Text style={styles.btnTitle}>Sobre</Text>
          <Text style={styles.btnText}>Versão | Contribuidores | Licença</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
        <Icon name="sign-out" size={25} color="#b14100" />
        <View>
          <Text style={styles.btnTitle}>Sair</Text>
          <Text style={styles.btnText}>Sair da conta</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    margin: 10,
    width: '100%',
    borderRadius: 10,
    
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 25,
    color: '#ff7424',
    textAlign: 'left',
  },
  btnText: {
    marginLeft: 25,
    color: 'white',
    textAlign: 'left',
  },
});

export default SettingsScreen;
