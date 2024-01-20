import React from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

const RegisterForm = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/LoginScreen.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('LoginForm')}>Daftar Sekarang</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        color: 'black',
        borderColor: 'black',
        borderRadius: 5,
        width: 200,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#A94438',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonText: {
        color: 'white',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RegisterForm;
