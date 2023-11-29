import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { auth } from './FirebaseDB';

const ProfileScreen = () => {
  const [userPhoto, setUserPhoto] = useState(require('../assets/user.png'));
  const [bannerImage, setBannerImage] = useState(
    require('../assets/banner.png')
  );
  const [userProfile, setUserProfile] = useState({
    username: '',
    email: '',
  });

  const handleImagePicker = async (type) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Desculpe, é necessário acesso para executar esta operação.');
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        if (type === 'profile') {
          setUserPhoto({ uri: result.uri });
        } else if (type === 'banner') {
          setBannerImage({ uri: result.uri });
        }
      }
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        username: user.displayName,
        email: user.email,
      }));
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ImageBackground
          style={styles.background}
          source={bannerImage}
          onPress={() => handleImagePicker('banner')}
        />

        <TouchableOpacity
          style={styles.photoContainer}
          onPress={() => handleImagePicker('profile')}>
          <Image style={styles.userPhoto} source={userPhoto} />
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>{userProfile.username}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.profileInfo}>
          <Text style={styles.label}>Usuário:</Text>
          <Text style={styles.value}>{userProfile.username}</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userProfile.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: '50%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: 15,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0000009f',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5E00',
    shadowColor: '#b14100',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.4,
  },
  profileInfo: {
    flexDirection: 'row',
    margin: 3,
  },
  awardsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  awardsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FF5E00',
  },
  awards: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  award: {
    backgroundColor: '#202020',
    padding: 25,
    margin: 10,
    borderRadius: 20,
  },
  editingLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 20,
    color: '#ff7424',
    margin: 9,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 20,
    color: '#ff7424',
  },
  editingValue: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#151515',
    borderRadius: 10,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  value: {
    flex: 1,
    color: '#fff',
  },
  bannerChangeButton: {
    flex: 1,
    position: 'absolute',
    top: 50,
    left: 25,
  },
  photoContainer: {
    margin: 20,
    padding: 10,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FF5E00',
    shadowColor: '#b14100',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    overflow: 'hidden',
  },
  userPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
  },
});

export default ProfileScreen;
