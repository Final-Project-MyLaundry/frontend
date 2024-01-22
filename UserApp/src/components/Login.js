import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native';
import { LoginContext } from '../../context/LoginContext';
import * as SecureStore from "expo-secure-store";


async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export default function LoginForm() {

    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setIsLogin, URL } = useContext(LoginContext)

    const handleClick = async () => {
        const response = await fetch(URL + '/users/login', {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const result = await response.json()

        if (response.ok) {
            await save("access_token", result.access_token)
            setIsLogin(result.access_token)
            ToastAndroid.showWithGravity('Success Login, Welcome to My Laundry!', ToastAndroid.LONG, ToastAndroid.TOP)
        } else {
            ToastAndroid.showWithGravity(result.message, ToastAndroid.LONG, ToastAndroid.TOP)
        }
    }


    return (
        <ImageBackground
            source={require('../../assets/Login.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleClick}>
                    <Text style={[styles.buttonText, { color: 'white' }]}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.registerText}>
                    Don't have an account?{' '}
                    <Text
                        style={styles.registerLink}
                        onPress={() => navigation.navigate('RegisterForm')}
                    >
                        Register
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: 200,
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
        color: '#0C94D2',
        textDecorationLine: 'underline',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

