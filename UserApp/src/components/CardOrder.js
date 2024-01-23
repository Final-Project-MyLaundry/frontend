import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

export default function CardOrder() {
    const { isLogin, URL } = useContext(LoginContext)
    const [order, setOrder] = useState([])

    const fetchData = async () => {
        const response = await fetch(URL + '/orders/customer', {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        setOrder(data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const content = ({ item, index }) => (
        <>
            <TouchableOpacity key={index}>
                <View style={styles.cardOrder} >
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 50, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pesanan No : {index + 1}</Text>
                        <Text>Amount : Rp. {item.totalAmount}</Text>
                        <Text>Status  : {item.progress}</Text>
                        <Text>Payment : {item.statusPay}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={order}
                renderItem={content}
                keyExtractor={item => item.orderId}
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