import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../src/components/Login";
import HomeForm from "../src/components/Home";
import RegisterForm from "../src/components/Register";
import TabNavigator from "./TabNavigator";
// import HomeForm from "../src/components/Home";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {(<>
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="LoginForm" component={LoginForm} />
                <Stack.Screen name="HomeForm" component={HomeForm} />   
                <Stack.Screen name="RegisterForm" component={RegisterForm} />
            </>
            )}
        </Stack.Navigator>
    )
}
