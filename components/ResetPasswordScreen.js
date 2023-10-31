import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

const handlePasswordReset = () => {
  {/* função para tratar a recuperação de senha */}
};

const ResetPasswordScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRegistration = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.png')}
      />

      <View style={styles.wrapper}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <Text style={styles.header}>Recuperação de senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu endereço de email"
          placeholderTextColor="#707070"
          onChangeText={(text) => setUsername(text)}
        />

        <TouchableOpacity style={styles.btn} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>Enviar email de recuperação</Text>
        </TouchableOpacity>

        <View style={styles.menu}>
          <Text style={styles.secondaryText}>Deseja voltar ao login?</Text>

          <TouchableOpacity onPress={goToLogin}>
            <Text style={{color: '#ff7424', fontWeight: 'bold'}}>Clique aqui</Text>
          </TouchableOpacity>
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
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000009f',
  },
  logo: {
    width: 125,
    height: 125,
    marginBottom: 10,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#fff',
    borderRadius: 10,
    backgroundColor: '#0000005f',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#b14100df',
    padding: 10,
    margin: 5,
    width: '80%',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  secondaryText: {
    padding: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default ResetPasswordScreen;
