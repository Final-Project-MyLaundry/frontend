// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet, Text, View } from 'react-native';
// import LoginForm from './src/components/Login';
// import RegisterForm from './src/components/Register';

// import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './navigator/StackNavigator';


export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator/>
        {/* <Stack.Screen name="Login" component={LoginForm} /> */}
        {/* <Stack.Screen name="Register" component={RegisterForm} />
        </Stack.Navigator> */}
      </NavigationContainer>
  );
}

