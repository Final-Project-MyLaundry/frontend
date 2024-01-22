import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardOrder from './CardOrder';

export default function Pesanan() {
    return (
        <View style={styles.container}>
            <Text style={styles.historyTitle}>History Orderan</Text>
            <CardOrder />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'left',
    },
});
