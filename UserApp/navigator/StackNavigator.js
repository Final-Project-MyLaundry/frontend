import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { LoginContext } from "../context/LoginContext";
import LoginForm from "../src/components/Login";
import RegisterForm from "../src/components/Register";
// import Home from "../src/components/Home";
import { useContext } from "react";
// import LogoutButton from "../src/components/LogoutButton";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    // const { isLoggedIn } = useContext(LoginContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
               {( <>
                    <Stack.Screen name="LoginForm" component={LoginForm} />
                    <Stack.Screen name="RegisterForm" component={RegisterForm} />

                </>
            )}
        </Stack.Navigator>
    )
}