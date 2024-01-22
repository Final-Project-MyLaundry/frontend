import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as SecureStore from "expo-secure-store"
import { useNavigation } from '@react-navigation/native';
import { useContext } from "react";
import { LoginContext } from '../../context/LoginContext';

export default function LogoutButton(){

    const navigation = useNavigation()
    const { setIsLogin } = useContext(LoginContext)

    return (
        <TouchableOpacity onPress={async () => {
            await SecureStore.deleteItemAsync('access_token')
            setIsLogin(false)
        }}>
            <Text style={{fontWeight: 'bold', color: 'red', marginRight: 15, marginBottom: -10}}>Logout</Text>
        </TouchableOpacity>
    );
};

