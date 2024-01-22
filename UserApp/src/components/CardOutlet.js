import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OutletCard = () => {

    const navigation = useNavigation()

    const handleCardPress = () => {
        // Navigate to DetailOutletScreen when the card is pressed
        navigation.navigate('DetailOutletScreen');
    };

    return (
        <TouchableOpacity style={styles.smallCard} onPress={handleCardPress}>
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: "https://i.pinimg.com/236x/05/03/76/050376e45a3479b9bde9d35e42965925.jpg" }} style={styles.outletImage} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.outletName}>Laundry wahyu</Text>
                    <Text style={styles.outletAddress}>Jl. Tanah Kusir</Text>
                </View>
            </View>
        </TouchableOpacity>
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
    smallCard: {
        width: '100%',
        borderRadius: 8,
        elevation: 3,
        marginHorizontal: "1%",
        marginTop: 8,
        alignItems: 'center',
    },
});

export default OutletCard;
