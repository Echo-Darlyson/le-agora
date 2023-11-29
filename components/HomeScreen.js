import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Você pode adicionar a lógica de navegação aqui usando o React Navigation

  const navigateToLibrary = () => {
    // Exemplo de navegação para a biblioteca de livros
    navigation.navigate('BibliotecaStack');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.appName}>Lê Agora</Text>
      <Text style={styles.description}>
        Seu portal para uma vasta e diversificada coleção de livros, tudo ao
        alcance dos seus dedos. Nosso aplicativo foi cuidadosamente projetado
        para inspirar o amor pela leitura, oferecendo uma biblioteca virtual
        repleta de títulos emocionantes de diversos gêneros.
      </Text>
      <TouchableOpacity onPress={navigateToLibrary} style={styles.exploreButton}>
        <Text style={styles.exploreButtonText}>Explorar Biblioteca</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  exploreButton: {
    backgroundColor: '#b14100',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;