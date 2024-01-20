import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PesananScreen from '../screens/PesananScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import LogoutButton from '../src/components/LogoutButton';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = 'home';
                    } else if (route.name === 'Pesanan') {
                        iconName = 'add';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }

                    return <Ionicons name={iconName} size={size} color={focused ? 'red' : color} />;
                },
                tabBarLabel: () => null,
            })}
            tabBarStyle={{
                position: 'absolute',
                bottom: 10,
                backgroundColor: 'white',
                height: 50,
            }}
            tabBarActiveTintColor="black"
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitle: "Home" }} />
            <Tab.Screen name="Pesanan" component={PesananScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{headerRight: () => (<LogoutButton/>)}} />
        </Tab.Navigator>
    );
}

