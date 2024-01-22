import { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native';
import { LoginContext } from '../../context/LoginContext';
import { useNavigation } from '@react-navigation/native';

export default function RegisterForm() {

    const navigation = useNavigation()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { URL } = useContext(LoginContext)

    const handleOnClick = async () => {
        const response = await fetch(URL + '/users/register', {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const result = await response.json()

        if (response.ok) {
            ToastAndroid.showWithGravity('Register success, Please Login to My Laundry!', ToastAndroid.LONG, ToastAndroid.TOP)
            navigation.navigate('LoginForm')
        } else {
            ToastAndroid.showWithGravity(result.message, ToastAndroid.LONG, ToastAndroid.TOP)
        }
    }

    return (
        <ImageBackground
            source={require('../../assets/imagelogin.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    placeholder="Name"
                    value={name}
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder="Email"
                    value={email}
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholder="Password"
                    value={password}
                    placeholderTextColor="black"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleOnClick}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.registerText}>
                    Already have a account?{' '}
                    <Text
                        style={[styles.registerLink, { color: '#0C94D2', textDecorationLine: 'underline' }]}
                        onPress={() => navigation.navigate('LoginForm')}
                    >
                        Login
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
        marginTop: 30
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
        backgroundColor: '#0C94D2',
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

