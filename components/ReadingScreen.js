import React, {useEffect} from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { useState } from 'react';
import Pdf from 'react-native-pdf';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const todoRef = firebase.firestore().collection('conquistas')

const ReadingScreen = ({ route }) => {
  const { file } = route.params
  const PdfResource = { uri: file, cache: true };
  
  const [numDocumentos, setNumDocumentos] = useState(0);
  const [listaBookUri, setListaBookUri] = useState([])
  lista = []

  useEffect(() => {
    const contarDocumentos = async () => {
      try {
        const colecao = await firebase.firestore().collection('conquistas').get();
        const numeroDocumentos = colecao.size;
        setNumDocumentos(numeroDocumentos);
      } catch (error) {
        console.error('Erro ao contar documentos:', error);
      }
    };

    contarDocumentos();
  }, []);

  useEffect(() => {
    const pegarUri = async () => {
      firebase
      .firestore()
      .collection('conquistas')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          lista.push(documentSnapshot.data().bookUri)
        });
      });
      setListaBookUri(lista)
    };

    pegarUri()
  }, []);

  return(
    <View style={styles.container}>
      <Pdf 
        trustAllCerts={false}
        source={PdfResource}
        style={styles.pdf}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          if(page == numberOfPages){
            console.log(lista)
            if(numDocumentos == 0 && !lista.includes(PdfResource.uri)){
              Alert.alert("Parabéns!", "Você leu todas as páginas do seu 1° livro, uma conquista foi desbloqueada!", [
                {
                  text: 'Ok'
                }
              ])
              const conquistasData = { bookUri: PdfResource.uri, nome: 'Leitor Novato - Leu 1 Livro Completo', icone: 'trophy' }
              todoRef.add(conquistasData)
            }else if(numDocumentos == 1 && !lista.includes(PdfResource.uri)){
              Alert.alert("Parabéns!", "Você leu todas as páginas do seu 2° livro, uma nova conquista foi desbloqueada!", [
                {
                  text: 'Ok'
                }
              ])
              const conquistasData = { bookUri: PdfResource.uri, nome: 'Leitor Veterano - Leu 2 Livros Completos', icone: 'trophy' }
              todoRef.add(conquistasData)
            }else if(numDocumentos == 2 && !lista.includes(PdfResource.uri)){
              Alert.alert("Parabéns!", "Você leu todas as páginas do seu 3° livro, uma nova conquista foi desbloqueada!", [
                {
                  text: 'Ok'
                }
              ])
              const conquistasData = { bookUri: PdfResource.uri, nome: 'Leitor Avançado - Leu 3 Livros Completos', icone: 'trophy' }
              todoRef.add(conquistasData)
            }
          }
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})

export default ReadingScreen;
