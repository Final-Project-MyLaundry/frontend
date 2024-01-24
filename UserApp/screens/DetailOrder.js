import { useCallback, useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/core";
import { useFocusEffect } from '@react-navigation/native';
import { LoginContext } from "../context/LoginContext";
import DetailOrder from "../src/components/detailOrder";


export default function DetailOrderScreen() {
    const route = useRoute()
    const { id } = route.params
    const { isLogin, URL } = useContext(LoginContext)
    const [order, setOrder] = useState([])
    const fetchOutlet = async () => {
        const response = await fetch(URL + '/orders/' + id, {
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
    useFocusEffect(
        useCallback(() => {
            fetchOutlet()
        }, [])
      );
    return (
        <>
            <DetailOrder order={order}/>
        </>
    )
}
