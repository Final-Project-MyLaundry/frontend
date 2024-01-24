import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import Modal from "react-native-modal";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function CardServices({ services, outletId }) {
    const [isChecked, setChecked] = useState({});
    const navigation = useNavigation();
    // console.log(isChecked);
    const [isModalVisible, setModalVisible] = useState(false);
    const [notes, setNotes] = useState("")
    let arr = Object.values(isChecked)
    const { URL, isLogin } = useContext(LoginContext)
    const handlePress = async () => {
        console.log("masuk");
        const response = await fetch(URL + '/orders/' + outletId, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            },
            body: JSON.stringify({ notes : notes, isChecked: isChecked })

        })
        if (response.ok) {
            navigation.navigate('HomeScreen')
        }
    }
    const openModal = () => {
        setModalVisible(!isModalVisible);
        setNotes("")
    }
    const content = ({ item, index }) => (

        <>
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
                <Checkbox style={{
                    position: 'absolute',
                    right: 15,
                    bottom: 30,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    borderColor: '#0C94D2'
                }}
                    value={isChecked[item._id]} onValueChange={(e) => setChecked({ ...isChecked, [item._id]: e })} />
                <Modal isVisible={isModalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.cardModal} >
                            <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10 }}>Input Your Notes<Text style={{ color: 'red' }}>*</Text> : </Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setNotes}
                                    placeholder="Input Your Notes, Ex : My dirty clothes are in front of the fence"
                                    value={notes}
                                    textAlignVertical="top"
                                    multiline={true}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                            <TouchableOpacity onPress={handlePress} style={{
                                backgroundColor: '#0C94D2',
                                borderRadius: 8,
                                paddingVertical: 8,
                                paddingHorizontal: 12,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5,
                                marginRight: 5,
                                marginBottom: -10,
                                width: 100,
                                opacity: notes == "" ? 0.5 : 1
                            }}
                            disabled={notes == "" ? true : false}
                            ><Text style={{ color: 'white', fontWeight: 'bold' }}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openModal} style={{
                                backgroundColor: '#E3651D',
                                borderRadius: 8,
                                paddingVertical: 8,
                                paddingHorizontal: 12,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5,
                                marginRight: 5,
                                marginBottom: -10,
                                width: 100
                            }}><Text style={{ color: 'white', fontWeight: 'bold' }}>
                                    Close
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );

    return (
        <SafeAreaView style={styles.containerServices}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Service : </Text>
            <View style={styles.container}>


                <FlatList
                    data={services}
                    renderItem={content}
                    keyExtractor={item => item._id}
                />
            </View>
            {arr.includes(true) ? (

                <TouchableOpacity
                    style={styles.buttonAdddPost}
                    onPress={openModal}
                >
                    <Ionicons name="add" size={32} color="#fff" />
                </TouchableOpacity>
            ) : (null)}
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    containerServices: {
        marginTop: 20,
        flexDirection: 'column',  // Perbaikan pada properti flexDirection
        flex: 1,
        padding: 20,
        justifyContent: 'center',  // Tengah secara vertikal
    },
    container: {
        marginTop: -20,
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
        height: 110,
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
    buttonAdddPost: {
        position: "absolute",
        bottom: 30,
        right: 40,
        zIndex: 1,
        borderRadius: 24,
        backgroundColor: "#1d9bf0",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
});
