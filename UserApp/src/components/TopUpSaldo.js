import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TopUpSaldo() {
    const navigation = useNavigation();

    const topUpOptions = [
        { amount: 5000, label: 'Rp 5,000' },
        { amount: 10000, label: 'Rp 10,000' },
        { amount: 30000, label: 'Rp 30,000' },
        { amount: 50000, label: 'Rp 50,000' },
        { amount: 100000, label: 'Rp 100,000' },
    ];

    const handleTopUpPress = (amount) => {
        navigation.navigate('WebViewScreen', { amount });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Top Up Saldo</Text>
            {topUpOptions.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleTopUpPress(option.amount)}
                    style={{ margin: 10, padding: 10, backgroundColor: 'lightblue' }}
                >
                    <Text>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

