import { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    return result
}

export const LoginContext = createContext(null)

export function AuthComponent({ children }) {
    const [isLogin, setIsLogin] = useState("")

    useEffect(() => {

        getValueFor('access_token').then((data) => {
            setIsLogin(data)
        })
    }, [])

    return (
        <LoginContext.Provider value={{ isLogin, setIsLogin, URL: 'https://ae5f-139-228-111-126.ngrok-free.app' }}>
            {children}
        </LoginContext.Provider>
    )
}