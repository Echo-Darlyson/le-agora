import React, { useState } from 'react';
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

const RegistrationScreen = ({ navigation }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((UserCrendentials) => {
        const user = UserCrendentials.user;
        user.updateProfile({
          displayName: displayName
        })
        console.log('Registrado com:', user.email);
        alert('Conta criada com sucesso.');
      })
      .catch((error) => alert(error.message));
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.png')}
      />

      <View style={styles.wrapper}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <Text style={styles.header}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um nome de usuário"
          value={displayName}
          placeholderTextColor="#707070"
          onChangeText={(text) => setDisplayName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite um email"
          value={email}
          placeholderTextColor="#707070"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite uma senha"
          value={password}
          placeholderTextColor="#707070"
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        <Text style={styles.secondaryText}>Cadastre-se com:</Text>

        <View style={styles.registrationOptions}>
          <TouchableOpacity style={styles.optionBtn}>
            <Icon name="google" size={50} color={'#ff7424'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Icon name="apple" size={50} color={'#ff7424'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Icon name="windows" size={50} color={'#ff7424'} />
          </TouchableOpacity>
        </View>

        <View style={styles.registrationOptions}>
          <Text style={styles.secondaryText}>Já possui conta?</Text>

          <TouchableOpacity onPress={goToLogin}>
            <Text style={{ color: '#ff7424', fontWeight: 'bold' }}>Entrar</Text>
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
  registrationOptions: {
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

export default RegistrationScreen;
