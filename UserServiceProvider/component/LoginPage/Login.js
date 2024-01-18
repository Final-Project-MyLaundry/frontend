import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../../assets/Header.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.registerText}>Don't have an account? <Text style={styles.buttonRegisterText}>Register</Text></Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 175,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: 300,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 128, 128, 0.4)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  input: {
    width: '100%',
    height: 40,
    color: '#000',
  },
  button: {
    backgroundColor: 'limegreen',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRegisterText: {
    color: 'white',
    fontSize: 16,
  },
  registerText: {
    color: 'white',
    fontSize: 14,
    backgroundColor: "#7EAA92",
    borderRadius: 4
  },
});

export default LoginScreen;
