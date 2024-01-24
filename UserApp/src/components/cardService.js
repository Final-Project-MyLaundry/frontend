import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function CardServices({services}) {

    const content = ({ item, index }) => (
        <>
            <TouchableOpacity key={index}>
                <View style={styles.cardOrder} key={index} >
                    <Image
                        source={require('../../assets/favicon.png')}
                        style={{ width: 40, height: 50, marginTop: 5 }}
                    />
                    <View style={styles.orderText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name : {item.name}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Price : Rp. {item.price}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.containerServices}>

            <View style={styles.container}>
                {services?.services?.length === 0 ? (
                    <Text style={styles.noServiceText}>No Services yet, Please add services!</Text>
                ) : (
                    <FlatList
                        data={services?.services}
                        renderItem={content}
                        keyExtractor={item => item._id}
                    />
                )}
            </View>
            <Text style={{ fontWeight: 'bold', borderBottomWidth: 1, paddingBottom: 5 }}>Review :</Text>
            <CardReview reviews={services?.reviews} />
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    containerServices: {
        marginTop: -20,
        flexDirection: 'column',  // Perbaikan pada properti flexDirection
        flex: 1,
        padding: 20,
        justifyContent: 'center',  // Tengah secara vertikal
    },
    container: {
        marginTop: -20,
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        justifyContent: 'center',  // Tengah secara horisontal
    },
    cardOrder: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        width: 'auto',
        height: 80,
        flexDirection: 'row',
        borderColor: "gray",
        borderWidth: 1,
    },
    orderText: {
        fontSize: 14,
        marginLeft: 20,
    },
    noServiceText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 100,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        color: 'black',
        marginBottom: -5,
    },

    input: {
        height: 40,
        width: 330,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    },

    cardModal: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        width: 'auto',
        height: "auto",
        flexDirection: 'column',
        borderColor: "gray",
        borderWidth: 1,
    },
});
