import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from 'react';

import { LoginContext } from '../../context/LoginContext';


export default function DetailOutlet() {

    const route = useRoute()
    // console.log(route.params);

    const { isLogin, URL } = useContext(LoginContext)
    const [data, setData] = useState([])

    const fetchData = async () => {
        let { id } = route.params
        // console.log(id);
        const response = await fetch(URL + '/outlets/detail/' + id, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        // console.log(data);
        setData(data)
    }
    useEffect(() => {
        fetchData()
    }, [])


    const navigation = useNavigation()

    const renderService = ({ item }) => (
        <View style={styles.serviceContainer}>
            <Text>Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price: Rp. {item.price}</Text>
        </View>
    );

    const renderReview = ({ item }) => (
        <View style={styles.reviewContainer}>
            <Text>{item.name[0]}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Review: {item.review}</Text>
        </View>
    );

    return (
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image
                        source={{ uri: data[0]?.image }}
                        style={styles.outletImage}
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.outletName}>{data[0]?.name}</Text>
                        <Text style={styles.outletAddress}>
                            Alamat: {data[0]?.address?.street},{' '}
                            {data[0]?.address?.village},{' '}
                            {data[0]?.address?.district}, {data[0]?.address?.city}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Services :</Text>
                <View>
                    <FlatList
                        data={data[0]?.services}
                        renderItem={renderService}
                        keyExtractor={(item, i) => i}
                        initialNumToRender={3}
                        maxToRenderPerBatch={3}
                        windowSize={3}
                    />
                </View>

                <Text style={styles.sectionTitle}>Reviews :</Text>
                <FlatList
                    data={data[0]?.reviews}
                    renderItem={renderReview}
                    keyExtractor={(item,i) => i}
                    initialNumToRender={3}
                    maxToRenderPerBatch={3}
                    windowSize={3}
                />
            </View>
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    content: {
        flexDirection: 'row',
        marginTop: 10,
    },
    outletImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 8,
    },
    textContent: {
        flex: 1,
    },
    outletName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
    },
    outletAddress: {
        fontSize: 16,
        marginTop: 5,
        color: 'gray',
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    transactionContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
    },
    serviceContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
    },
    reviewContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
    }
});