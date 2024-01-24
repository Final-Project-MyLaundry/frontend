import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DetailOutlet from "../src/components/DetailOutlet";
import CardServices from "../src/components/cardService";
import { LoginContext } from "../context/LoginContext";
import { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";


export default function DetailOutletScreen() {

    const route = useRoute()
    const { id } = route.params
    const { isLogin, URL } = useContext(LoginContext)
    const [outlet, setOutlet] = useState([])

    const fetchOutlet = async () => {
        const response = await fetch(URL + '/outlets/detail/' + id, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            }
        })
        const data = await response.json();
        setOutlet(data)
    }
    useEffect(() => {
        fetchOutlet()
    }, [])
    // console.log(outlet);
    return (
        <SafeAreaView style={styles.container}>
            <DetailOutlet outlet={outlet} />
            <CardServices services={outlet[0]?.services} outletId={outlet[0]?._id}/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        borderTopWidth: 1,
        borderColor: "#D4D4D4",
    }
})