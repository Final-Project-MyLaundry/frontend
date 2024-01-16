import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../src/components/Login";
import RegisterForm from "../src/components/Register";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

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