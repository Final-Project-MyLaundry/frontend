import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LoginContext } from '../../context/LoginContext';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { WebView } from 'react-native-webview';
import MyWebViewButton from './WebView';

export default function Profile() {

    const navigation = useNavigation()

    const { isLogin, URL } = useContext(LoginContext)
    const [profile, setProfile] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch(URL + '/users/provider', {
                method: "GET",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + isLogin
                }
            })
            const data = await response.json();
            setProfile(data)
        } catch (error) {
            console.log(error , "dari profile");
        }
    }

    useEffect(() => {
        fetchData()
    }, [profile])

    const handleEditPress = () => {
        navigation.navigate('UpdateProfileScreen');
    };

    const myWebComponent = async () => {
        console.log('tertekan');
        <WebView
            source={{ uri: 'https://reactnative.dev' }} style={{ flex: 1 }}
        />
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileCard}>

                <View style={styles.profileActions}>
                    <View style={styles.userProfile}>
                        <View>
                            <Image source={{ uri: "https://i.pinimg.com/236x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg" }} style={styles.userImage} />
                            <Text style={styles.userName}>{profile.name}</Text>
                            <Text style={styles.userEmail}>{profile.email}</Text>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.title}>Saldo</Text>
                            <Text style={styles.balance}>Rp. {profile.saldo}</Text>
                        </View>
                    </View>
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.topUpButton} onPress={() => navigation.navigate('TopUpScreen')}>
                            <Text style={styles.buttonText}>Top Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.historyCard}>
                <Text style={styles.title}>History Transaksi</Text>
                {/*transaction history components here */}
                {profile?.transactions?.length != 0 ? (
                    <>
                        {profile?.transactions?.map((el, i) => {
                            return (
                                <View style={styles.transactionItem} key={i}>
                                    <Image source={require('../../assets/moneyy.png')} style={styles.outletImage} />
                                    <View style={styles.orderText}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{el.orderId}</Text>
                                        <Text>Amount : Rp. {el.amount}</Text>
                                        <Text>Description :<Text style={{ color: el.description == 'IN' ? 'green' : 'red', fontWeight: 'bold' }}> {el.description}</Text></Text>
                                    </View>
                                </View>
                            )
                        })}
                    </>
                ) : <><Text>You don't have transactions</Text></>
                }
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    orderText: {
        fontSize: 12,
        marginRight: 40,
    },
    logoImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    profileCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3498db',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    profileInfo: {
        flex: 2,
        marginLeft: 40,
    },
    profileActions: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
    },
    balance: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage: {
        width: 70,
        height: 70,
    },
    userName: {
        fontSize: 16,
        marginTop: 4,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 14,
        color: '#555',
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        backgroundColor: '#292c36',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        marginLeft: 10,
    },
    topUpButton: {
        color: 'white',
        marginLeft: 5
    },
    editButton: {
        color: 'white',
    },
    historyCard: {
        backgroundColor: '#edeff0',
        padding: 16,
        borderRadius: 8,
        elevation: 3,
    },
    transactionItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    outletImage: {
        width: 50,
        height: 50,
        marginLeft: 20,
        marginRight: 10
    },
    textContainer: {
        flex: 1,
    },
    outletName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    topUp: {
        fontSize: 14,
        fontWeight: 'bold',

    },
});
