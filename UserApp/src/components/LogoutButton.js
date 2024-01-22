import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LogoutButton = () => {

    const navigation = useNavigation()
    const handleLogout = () => {
        navigation.navigate('LoginForm')
    };

    return (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    logoutButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'white', 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginRight: 16,
    },
    buttonText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default LogoutButton;
