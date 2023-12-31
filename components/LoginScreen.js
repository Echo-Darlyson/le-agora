import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from './FirebaseDB';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Início');
      }
    });

    return unsubscribe;
  });

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logado com:', user.email)
    }).catch(error => alert(error.message));
  };

  const goToRegistration = () => {
    navigation.navigate('Cadastro');
  };

  const goToResetPassword = () => {
    navigation.navigate('Recuperacao');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.png')}
      />

      <View style={styles.wrapper}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <Text style={styles.header}>Lê Agora</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={email}
          placeholderTextColor="#707070"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#707070"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.secondaryText}>Entrar com:</Text>

        <View style={styles.loginOptions}>
          <Text style={styles.secondaryText}>Esqueceu a senha?</Text>
          
          <TouchableOpacity onPress={goToResetPassword}>
            <Text style={{color: '#ff7424', fontWeight: 'bold'}}>Recuperar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.loginOptions}>
          <Text style={styles.secondaryText}>Não possui conta?</Text>
          
          <TouchableOpacity onPress={goToRegistration}>
            <Text style={{color: '#ff7424', fontWeight: 'bold'}}>Cadastre-se</Text>
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
    position: 'relative',
  },
  wrapper: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000009f',
  },
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionBtn: {
    margin: 10,
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

export default LoginScreen;
