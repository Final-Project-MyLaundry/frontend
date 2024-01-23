import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LoginContext } from '../../context/LoginContext';


const OutletCard = ({ filter }) => {

    const { isLogin, URL } = useContext(LoginContext)
    const [outlet, setOutlet] = useState([])

    const navigation = useNavigation()

    const fetchData = async () => {
        if (filter) {
            console.log(filter);
            const response = await fetch(URL + '/outlets/get', {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + isLogin
                },
                body: JSON.stringify({filter})
            })
            const data = await response.json();
            setOutlet(data)
        } else {
            const response = await fetch(URL + '/outlets/get', {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + isLogin
                }
            })
            const data = await response.json();
            setOutlet(data)
        }
    }
    useEffect(() => {
        fetchData()
    }, [filter])

    const handleCardPress = (id) => {
        navigation.navigate('DetailOutletScreen', { id });
    };

    return (
        <>
            {outlet.map((outlet, i) => {
                return (
                    <TouchableOpacity style={styles.smallCard} onPress={() => handleCardPress(outlet._id)} key={i}>
                        <View style={styles.cardContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: outlet.image }} style={styles.outletImage} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.outletName}>{outlet.name}</Text>
                                <Text style={styles.outletAddress}>{outlet.address.street}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                )
            })}
        </>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#edeff0',
        padding: 16,
        borderRadius: 8,
        elevation: 3,
        marginBottom: 16,
        width: '100%',
    },
    imageContainer: {
        marginRight: 16,
    },
    outletImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
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
    smallCard: {
        width: '100%',
        borderRadius: 8,
        elevation: 3,
        marginHorizontal: "1%",
        marginTop: 8,
        alignItems: 'center',
    },
});

export default OutletCard;
