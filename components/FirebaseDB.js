import firebase from 'firebase/compat/app'
require('firebase/compat/auth')


// Configuração
const firebaseConfig = {
  apiKey: "AIzaSyDqsDXfSLEvlDkhUcKBA1JcsTKfuZ_7R5A",
  authDomain: "leagorabackend.firebaseapp.com",
  projectId: "leagorabackend",
  storageBucket: "leagorabackend.appspot.com",
  messagingSenderId: "1020791976363",
  appId: "1:1020791976363:web:cb331caf8e4c889234e2ee"
};

// Inicialização
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };