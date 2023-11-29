import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="code" size={100} color="white" style={styles.logo} />
      <Text style={styles.appName}>Lê Agora</Text>
      <Text style={styles.version}>Versão 1.0.0</Text>
      <Text style={styles.developer}>Desenvolvido por Darlyson, Filipe, Jean, Thaís e Kalil para a disciplina extensionista Programação de Dispositivos Móveis em Android</Text>
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
    width: 110,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  version: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  developer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center'
  },
});

export default AboutScreen;
