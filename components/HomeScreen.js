import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>Bem-vindo!</Text>
        <Text style={styles.text}>
          "Lê Agora" é o seu portal para uma vasta e diversificada coleção de
          livros, tudo ao alcance dos seus dedos. Nosso aplicativo foi
          cuidadosamente projetado para inspirar o amor pela leitura, oferecendo
          uma biblioteca virtual repleta de títulos emocionantes de diversos
          gêneros.
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('BibliotecaTab')}>
          <Text style={styles.btnText}>Ver biblioteca</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.btnText}>Ver perfil</Text>
        </TouchableOpacity>
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
  textWrapper: {
    width: '80%',
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF5E00',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  btn: {
    backgroundColor: '#b14100',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
