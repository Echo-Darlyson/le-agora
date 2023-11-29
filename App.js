import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ImageDetailScreen from './components/ImageDetailScreen';
import ProfileScreen from './components/ProfileScreen';
import BooksScreen from './components/BooksScreen';
import SettingsScreen from './components/SettingsScreen';
import RegistrationScreen from './components/RegistrationScreen';
import ReadingScreen from './components/ReadingScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen';
import AboutScreen from './components/About';
import AchievementsScreen from './components/Achievements';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const darkTheme = DefaultTheme;
darkTheme.colors.background = '#000';

const BooksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BibliotecaStack"
        component={BooksScreen}
        options={{ 
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Detalhes"
        component={ImageDetailScreen}
        options={{
          title: 'Detalhes',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ff7424',
          },
          headerStyle: {
            backgroundColor: '#000',
            borderBottomWidth: 0,
          },
          headerTintColor: '#ff7424',
        }}
      />

      <Stack.Screen
        name="Leitura"
        component={ReadingScreen}
        options={{
          title: 'Leitura',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ff7424',
          },
          headerStyle: {
            backgroundColor: '#000',
            borderBottomWidth: 0,
          },
          headerTintColor: '#ff7424',
        }}
      />
    </Stack.Navigator>
  );
};

const ConfigStack = () => {
  return(
    <Stack.Navigator initialRouteName='AllSettings'>
      <Stack.Screen
        name="AllSettings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name="Sobre"
        component={AboutScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTitleStyle: {
            color: '#ff7424',
            fontWeight: 'bold'
          },
          headerTintColor: '#ff7424',
        }}
      />

      <Stack.Screen
        name="Conquistas"
        component={AchievementsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTitleStyle: {
            color: '#ff7424',
            fontWeight: 'bold'
          },
          headerTintColor: '#ff7424',
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            /* Comentadar para faclitar a interação durante a edição */
            display:
              route.name === 'Login' || route.name === 'Cadastro'
                ? 'none'
                : 'flex',
            backgroundColor: '#000',
            borderTopWidth: 0
          },
          tabBarItemStyle: {
            borderRadius: 10,
            padding: 4
          },
          tabBarActiveTintColor: '#FF5E00',
          tabBarActiveBackgroundColor: '#FF5E0020',
        })}>

        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />

        <Tab.Screen
          name="Cadastro"
          component={RegistrationScreen}
          options={{
            headerShown: false,
            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />

        <Tab.Screen 
          name="Recuperacao"
          component={ResetPasswordScreen}
          options={{
            headerShown: false,
            tabBarItemStyle: {
              display: 'none',
            },
          }}
        />

        <Tab.Screen
          name="Início"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" size={25} color="#b14100" />,
          }}
        />
        
         <Tab.Screen
          name="Biblioteca"
          component={BooksStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="book" size={25} color="#b14100" />,
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="user" size={25} color="#b14100" />,
          }}
        />
        
        <Tab.Screen
          name="Config"
          component={ConfigStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="gears" size={25} color="#b14100" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
