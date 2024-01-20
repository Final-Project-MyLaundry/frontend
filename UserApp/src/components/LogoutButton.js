import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LogoutButton = ({ navigation }) => {
    const handleLogout = () => {
        // Logika logout di sini (jika perlu)
        // Navigasi ke halaman home setelah logout
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
        marginTop: 16,
        marginRight: 16,
    },
    buttonText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default LogoutButton;