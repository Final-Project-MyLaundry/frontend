import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginContext } from '../../context/LoginContext';


export default function UpdateProfile() {

    const navigation = useNavigation()

    const { isLogin, URL } = useContext(LoginContext)

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            village: '',
            distric: '',
            city: '',
        },
        phone: '',
    });

    const fetchProfile = async () => {
        const response = await fetch(URL + '/users/provider', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        console.log(data);
        setProfile(data)
    }
    const handleOnClick = async () => {
              const response = await fetch(URL + '/users', {
            method: "PUT",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            },
            body: JSON.stringify(profile)
        })
        if (response.ok) {
            // ToastAndroid.showWithGravity('Succes Update Profile!', ToastAndroid.LONG, ToastAndroid.TOP)
            navigation.navigate("Profile")
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Update Profile</Text>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProfile({ ...profile, name: text })}
                        placeholder="Enter name"
                        value={profile.name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setProfile}
                        placeholder="Enter email"
                        value={profile.email}
                    />
                </View>
                <Text style={styles.label}>Address</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Street :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProfile({ ...profile, address: { ...profile.address, street: text } })}
                        placeholder="Enter street"
                        value={profile.address.street}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Village :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProfile({ ...profile, address: { ...profile.address, village: text } })}
                        placeholder="Enter village"
                        value={profile.address.village}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>District :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProfile({ ...profile, address: { ...profile.address, distric: text } })}
                        placeholder="Enter district"
                        value={profile.address.distric}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>City :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProfile({ ...profile, address: { ...profile.address, city: text } })}
                        placeholder="Enter city"
                        value={profile.address.city}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Phone :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProfile({ ...profile, phone: text })}
                        placeholder="Enter phone"
                        value={profile.phone}
                        keyboardType="phone-pad"
                    />
                </View>
            </ScrollView>

            <TouchableOpacity onPress={handleOnClick}
                style={styles.button}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'white'
                }}>Update</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 100,
        height: 90,
        marginBottom: 10,
        marginTop: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'black',
        alignItems: 'center',
    },
    inputContainer: {
        marginBottom: 5,
        marginTop: 15,
    },
    label: {
        fontSize: 14,
        color: 'black',
        marginBottom: -5,
    },

    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#0C94D2',
        margin: 5,
        borderRadius: 10,
        width: 300,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    }
});