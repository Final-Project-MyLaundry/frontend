// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigator/StackNavigator';
import { AuthComponent } from './context/LoginContext';
// import { StyleSheet, Text, View } from 'react-native';
// import LoginForm from './src/components/Login';
// import RegisterForm from './src/components/Register';

// import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  return (
    <AuthComponent>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthComponent>
  );
}

