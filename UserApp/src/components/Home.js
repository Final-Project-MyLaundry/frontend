import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import OutletCard from './CardOutlet';
import { useNavigation } from '@react-navigation/core';
import { LoginContext } from '../../context/LoginContext';

export default function HomeForm()  {

    const { isLogin, URL } = useContext(LoginContext)
    const [user, setUser] = useState([])
    const [filter, setFilter] = useState("")

    const fetchData = async () => {
        const response = await fetch(URL + '/users/provider', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        setUser(data)
    }
    useEffect(() => {
        fetchData()
    }, [])


    const navigation = useNavigation()

    const handleCardPress = () => {
        navigation.navigate('DetailOutletScreen');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.welcomeLogoContainer}>
                        <Text style={styles.welcomeText}>WELCOME</Text>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={styles.logoImage}
                        />
                    </View>
                        <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.cardTitle}>Saldo: Rp. {user.saldo}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add Saldo</Text>
                    </TouchableOpacity>
                </View>

                {/* Card Layanan Kecil */}
                <Text style={[styles.smallCardTitle, { color: 'black', marginTop: 8, marginBottom: 10, textAlign: 'left', width: '100%' }]}>
                    Daftar Layanan
                </Text>
                <View style={styles.smallCardContainer}>
                    <TouchableOpacity style={styles.smallCard}>
                        <View style={styles.cardContent}>
                            <Image
                                source={require('../../assets/peta.png')}
                                style={[styles.smallCardImage, { width: 100 }]}
                            />
                            <Text style={[styles.smallCardTitle, { color: '#FFFFFF', marginTop: 8 }]}>Terdekat</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.smallCard} onPress={() => setFilter('reguler')}>
                        <View style={styles.cardContent}>
                            <Image
                                source={require('../../assets/kiloan.png')}
                                style={styles.smallCardImage}
                            />
                            <Text style={[styles.smallCardTitle, { color: '#FFFFFF', marginTop: 8 }]}>Reguler</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.smallCard} onPress={() => setFilter('express')}>
                        <View style={styles.cardContent}>
                            <Image
                                source={require('../../assets/express.png')}
                                style={styles.smallCardImage}
                            />
                            <Text style={[styles.smallCardTitle, { color: '#FFFFFF', marginTop: 8 }]}>Express</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.smallCard} onPress={() => setFilter('setrika')}>
                        <View style={styles.cardContent}>
                            <Image
                                source={require('../../assets/setrika.png')}
                                style={styles.smallCardImage}
                            />
                            <Text style={[styles.smallCardTitle, { color: '#FFFFFF', marginTop: 8 }]}>Setrika</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.smallCard} onPress={() => setFilter('cuci')}>
                        <View style={styles.cardContent}>
                            <Image
                                source={require('../../assets/cuci.png')}
                                style={styles.smallCardImage}
                            />
                            <Text style={[styles.smallCardTitle, { color: '#FFFFFF', marginTop: 8 }]}>Cuci Lipat</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.smallCard}>
                        <View style={styles.cardContent}>
                            <Image
                                source={require('../../assets/dress.png')}
                                style={styles.smallCardImage}
                            />
                            <Text style={[styles.smallCardTitle, { color: '#FFFFFF', marginTop: 8 }]}>VIP</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.smallCardTitle, { color: 'black', marginTop: 8, marginBottom: 10, textAlign: 'left', width: '100%' }]}>
                    Daftar Outlet Laundry
                </Text>

                <View>
                    <OutletCard filter={filter} />
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    welcomeLogoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    userName: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'normal',
    },
    logoImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },
    cardContainer: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        elevation: 3,
        marginBottom: 16,
        width: '100%',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    addButton: {
        backgroundColor: '#0C94D2',
        padding: 10,
        width: 100,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    smallCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 16,
    },
    smallCard: {
        flex: "row",
        width: '30%',
        backgroundColor: '#0C94D2',
        padding: 12,
        borderRadius: 8,
        elevation: 3,
        marginHorizontal: "1%",
        marginTop: 8,
        alignItems: 'center',
    },
    spacing: {
        marginBottom: 16,
    },
    smallCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardContent: {
        alignItems: 'center',
    },
    smallCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
