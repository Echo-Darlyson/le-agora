import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { books, booksData } from '../misc/Books';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const Item = ({ category }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{category}</Text>
    </TouchableOpacity>
  );
};

const BooksScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleSearch = () => {
    const filtered = booksData.filter((bookItem) =>
      bookItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() =>
        navigation.navigate('Detalhes', {
          image: item.image,
          description: item.description,
          author: item.author,
          genres: item.genres,
          file: item.url,
          classification: item.classification,
        })
      }>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Está procurando algo?"
          placeholderTextColor="#707070"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={30}
            color="#b14100"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <ScrollView style={styles.listContainer} horizontal={true}>
          <FlatList
            contentContainerStyle={styles.list}
            data={books}
            renderItem={({ item }) => <Item category={item.category} />}
            keyExtractor={(item) => item.category}
            numColumns={10}
          />
        </ScrollView>

        <ScrollView scrollEnabled={true} style={styles.listContainer}>
          <FlatList
            data={filteredBooks}
            renderItem={renderItem}
            keyExtractor={(bookItem) => bookItem.id}
            numColumns={2}
          />
        </ScrollView>

        <LinearGradient
          style={styles.gradient}
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']}
          pointerEvents="none">
          <View style={styles.shadowView} />
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10
  },
  searchContainer: {
    marginTop: 45,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    width: '95%',
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    height: '25%',
  },
  shadowView: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  searchIcon: {
    marginLeft: 10,
  },
  listContainer: {
    width: '100%',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    paddingLeft: 10,
    borderWidth: 1,
    marginBottom: 20,
    color: '#fff',
    borderRadius: 10,
    backgroundColor: '#0000005f',
  },
  item: {
    backgroundColor: '#b14100',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  bookItem: {
    flex: 1,
    backgroundColor: '#151515',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff7424',
    textAlign: 'center',
    marginTop: 10,
  },
  bookAuthor: {
    color: '#fff',
    textAlign: 'center',
  },
  imageContainer: {
    width: 120,
    height: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default BooksScreen;
