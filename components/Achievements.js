import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone desejado da biblioteca
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const AchievementsScreen = () => {

  const [conquistasData, setConquistasData] = useState([])
  const todoRef = firebase.firestore().collection('conquistas')

  useEffect(async => {
    todoRef
    .onSnapshot(
        querySnapshot => {
            const conquistas = []
            querySnapshot.forEach((doc) => {
                const {nome, icone} = doc.data()
                conquistas.push({
                    nome,
                    icone
                })
            })
            setConquistasData(conquistas)
        }
    )
  }, [])

  const renderConquista = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
      <Icon name={item.icone} size={30} color="gold" />
      <Text style={{ marginLeft: 10, color: 'white' }}>{item.nome}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={conquistasData}
        renderItem={renderConquista}
      />
    </View>
  );
};

export default AchievementsScreen;
