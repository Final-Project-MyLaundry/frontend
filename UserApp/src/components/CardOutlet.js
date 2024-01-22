import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OutletCard = () => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: "https://i.pinimg.com/236x/05/03/76/050376e45a3479b9bde9d35e42965925.jpg" }} style={styles.outletImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.outletName}>Laundry wahyu</Text>
                <Text style={styles.outletAddress}>Jl. Tanah Kusir</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#edeff0',
        padding: 16,
        borderRadius: 8,
        elevation: 3,
        marginBottom: 16,
        width: '100%',
    },
    imageContainer: {
        marginRight: 16,
    },
    outletImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
    },
    outletName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    outletAddress: {
        fontSize: 14,
    },
});

export default OutletCard;