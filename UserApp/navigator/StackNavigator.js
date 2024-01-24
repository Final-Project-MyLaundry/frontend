import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../src/components/Login";
import RegisterForm from "../src/components/Register";
import TabNavigator from "./TabNavigator";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import UpdateProfile from "../src/components/UpdateProfile";
import WebViewScreen from "../screens/WebViewScreen";
import TopUpSaldo from "../src/components/TopUpSaldo";
import DetailOutletScreen from "../screens/DetailOutletScreen";
import DetailOrderScreen from "../screens/DetailOrder";


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
                        <Stack.Screen name="DetailOutlet" component={DetailOutletScreen} options={{ headerShown: true }} />
                        <Stack.Screen name="UpdateProfileScreen" component={UpdateProfile} />
                        <Stack.Screen name="TopUpScreen" component={TopUpSaldo} />
                        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
                        {/* <Stack.Screen name="DetailOrder" component={DetailOrderScreen} options={{ headerShown: true }} /> */}
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
