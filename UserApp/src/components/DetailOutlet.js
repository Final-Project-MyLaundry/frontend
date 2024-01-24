
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CardServices from "./cardService";




export default function DetailOutlet({outlet}) {
    return (
        <SafeAreaView>
            <CardServices services={outlet[0]?.services} />
                <View style={styles.content}>
                    <View style={styles.positionUserImage} >
                        <Image
                           source={{ uri: outlet[0]?.image }}
                            style={{ width: 100, height: 95, borderRadius: 15 }}
                        />
                    </View>
                    {/* <View style={styles.textContent}>
                        <Text style={styles.welcome}>{outlet[0]?.name} </Text>
                        <Text>{outlet[0]?.address.street} {outlet[0]?.address.village} {outlet[0]?.address.district} {outlet[0]?.address.city}</Text>

                    </View> */}
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderTopWidth: 1,
        borderColor: "#D4D4D4",

    },
    content: {
        height: "auto",
        flexDirection: 'row',
        marginTop: 10,
    },
    positionUserImage: {
        flex: 1,
    },
    textContent: {
        flex: 2,
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 20
    },
    card: {
        backgroundColor: '#0C94D2',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        width: 'auto',
        height: 130,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderColor: "gray",
        borderWidth: 1,
        elevation: 7,
    },
    saldoContainer: {
        flex: 1,
        marginTop: 10,
    },
    saldoText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    claimButton: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    claimButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 14,
        color: 'white',
    },
    buttonAdddPost: {
        position: "absolute",
        bottom: 10,
        right: 15,
        zIndex: 1,
        borderRadius: 24,
        backgroundColor: "#1d9bf0",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
    }
});
