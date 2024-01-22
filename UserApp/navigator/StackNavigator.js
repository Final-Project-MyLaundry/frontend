import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../src/components/Login";
import RegisterForm from "../src/components/Register";
import TabNavigator from "./TabNavigator";
import DetailOutlet from "../src/components/DetailOutlet";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    const { isLogin } = useContext(LoginContext)

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {
                isLogin ? (
                    <>
                        <Stack.Screen name="Home" component={TabNavigator} />
                        <Stack.Screen name="DetailOutletScreen" component={DetailOutlet} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="LoginForm" component={LoginForm} />
                        <Stack.Screen name="RegisterForm" component={RegisterForm} />
                    </>
                )}
        </Stack.Navigator >
    )
}
