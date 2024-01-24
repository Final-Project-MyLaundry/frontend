import { SafeAreaView, Text } from "react-native";
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
    return (
        <SafeAreaView>
        <Text>Test</Text>
           <DetailOutlet outlet={outlet}/>
           <CardServices services={outlet[0]?.result}/>
        </SafeAreaView>
    )
}
