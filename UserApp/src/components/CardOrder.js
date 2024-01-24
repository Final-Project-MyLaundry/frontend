import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, CheckBox } from "react-native";
import { useCallback, useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function CardOrder() {
    const navigation = useNavigation()
    const { isLogin, URL } = useContext(LoginContext)
    const [order, setOrder] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch(URL + '/orders/customer', {
                method: "GET",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + isLogin
                }
            })
            
            if (response.ok) {
                const data = await response.json();
                setOrder(data)
            }
        } catch (error) {
            console.log(error , "dari card order");
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchData()
        }, [order])
      );

    const content = ({ item, index }) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('DetailOrder', { id: item._id })}>
                <View style={styles.cardOrder} >
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 50, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pesanan No : 45692{index + 1}</Text>
                        <Text>Amount : Rp. {item.totalAmount}</Text>
                        <Text>Status  : <Text style={{ fontWeight : 'bold', color : item.progress === 'Waiting' ? 'red' : 'green'}}> {item.progress} </Text></Text>
                        <Text>Payment : {item.statusPay}</Text>
                    </View>
                </View>
            </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={order}
                renderItem={content}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        flexDirection: 'row',
        flex: 1,
        padding: 40,
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    cardOrder: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        width: 'auto',
        height: 100,
        flexDirection: 'row', 
        borderColor: "#fff",
        borderWidth: 1,
    },
    orderText: {
        fontSize: 14,
        marginLeft: 20,
    },
    historyTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    historyText: {
        color: 'gray',
        fontSize: 12,
        fontStyle: 'italic',
    },
});