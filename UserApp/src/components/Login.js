import React from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

const LoginForm = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/Login.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
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
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.registerText}>
                    Don't have an account?{' '}
                    <Text
                        style={[styles.registerLink, {color: "#0C94D2"}]}
                    >
                        Register
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        color: 'black',
        borderColor: '#ccc',
        borderRadius: 5,
        width: 200,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#0C94D2',
        borderWidth: 1,
        borderColor: 'black',
    },
    registerText: {
        color: 'black',
        marginTop: 10,
    },
    registerLink: {
        color: '0C94D2',
        textDecorationLine: 'underline',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginForm;
