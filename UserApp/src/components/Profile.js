import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Profile = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logoImage}
            />
            <View style={styles.profileCard}>

                <View style={styles.profileActions}>
                    <View style={styles.userProfile}>
                        <View>
                            <Image source={{ uri: "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg" }} style={styles.userImage} />
                            <Text style={styles.userName}>John Doe</Text>
                            <Text style={styles.userEmail}>john.doe@example.com</Text>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.title}>Saldo</Text>
                            <Text style={styles.balance}>Rp 1.000.000</Text>
                        </View>
                    </View>
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.topUpButton}>
                            <Text style={styles.buttonText}>Top Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.historyCard}>
                <Text style={styles.title}>History Transaksi</Text>
                {/*transaction history components here */}
                <View style={styles.transactionItem}>
                    <Image source={require('../../assets/moneyy.png')} style={styles.outletImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.outletAddress}>Top Up Rp. 50.000</Text>
                    </View>
                </View>
                <View style={styles.transactionItem}>
                    <Image source={require('../../assets/moneyy.png')} style={styles.outletImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.outletAddress}>Top Up Rp. 100.000</Text>
                    </View>
                </View>
                <View style={styles.transactionItem}>
                    <Image source={require('../../assets/moneyy.png')} style={styles.outletImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.outletAddress}>Top Up Rp. 50.000</Text>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 16,
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
        width: 60,
        height: 60,
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
    outletAddress: {
        fontSize: 14,
    },
});
