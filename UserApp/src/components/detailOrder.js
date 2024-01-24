import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import Modal from "react-native-modal";
import { LoginContext } from "../../context/LoginContext";



export default function DetailOrder({ order }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const { URL, isLogin } = useContext(LoginContext)
    const [pay, setPay] = useState("")
    const handleSubmit = async () => {
        const response = await fetch(URL + '/orders/' + order._id, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isLogin
            },
            body: JSON.stringify({pay})
        })
    }

    const openModal = () => {
        setModalVisible(!isModalVisible);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.positionUserImage} >
                        <Image
                            source={require('../../assets/orderIcon2.png')}
                            style={{ width: 80, height: 70 }}
                        />
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.welcome}>No : {order._id} </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Status : <Text style={{ color: order?.progress === 'Accepted' ? 'green' : 'red', fontWeight: 'bold' }}>{order.progress}</Text>
                        </Text>
                    <TouchableOpacity style={styles.claimButton}>
                        <Text style={styles.claimButtonText}>Completed</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom: 20, marginLeft: 10}}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10 }}>Rincian Order: </Text>

                    {order?.result?.map((service, index) => (
                        <View style={styles.serviceText} key={index}>
                            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>- {service?.name}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>   Price : Rp. {service?.price} x {order.servicesId[index].qty}</Text>
                        </View>
                    ))}

                <Text>Total Price : Rp. <Text style={{ fontWeight: 'bold'}}>{order?.totalAmount}</Text></Text>
                <TouchableOpacity style={styles.payButton} onPress={openModal}>
                    <Text style={styles.claimButtonText}>Bayar</Text>
                </TouchableOpacity>
                </View>

                <View style={order.progress == "Waiting" ? styles.cardServicesTrue : styles.cardServicesFalse} >
                    <View style={styles.timeline}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: order.progress === 'Waiting' ? 'black' : 'gray' }}>Waiting</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: order.progress === 'Waiting' ? 'black' : 'gray' }}>Pesanan Anda telah diterima dan sekarang sedang menunggu untuk diproses.</Text>
                    </View>
                </View>

                <View style={order.progress == "Accepted" ? styles.cardServicesTrue : styles.cardServicesFalse} >
                    <View style={styles.timeline}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: order.progress === 'Accepted' ? 'black' : 'gray' }}>Accepted</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: order.progress === 'Accepted' ? 'black' : 'gray' }}>Pesanan Anda telah diterima dan sekarang sedang menunggu untuk diproses.</Text>
                    </View>
                </View>

                <View style={order.progress == "Pick-Up" ? styles.cardServicesTrue : styles.cardServicesFalse} >
                    <View style={styles.timeline}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: order.progress === 'Pick-Up' ? 'black' : 'gray' }}>Pick-Up</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: order.progress === 'Pick-Up' ? 'black' : 'gray' }}>Pesanan Anda telah diterima dan sekarang sedang menunggu untuk diproses.</Text>
                    </View>
                </View>
                <View style={order.progress == "On-Progress" ? styles.cardServicesTrue : styles.cardServicesFalse} >
                    <View style={styles.timeline}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: order.progress === 'On-Progress' ? 'black' : 'gray' }}>On-Progress</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: order.progress === 'On-Progress' ? 'black' : 'gray' }}>Pesanan Anda telah diterima dan sekarang sedang menunggu untuk diproses.</Text>
                    </View>
                </View>

                <View style={order.progress == "Delivered" ? styles.cardServicesTrue : styles.cardServicesFalse} >
                    <View style={styles.timeline}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: order.progress === 'Delivered' ? 'black' : 'gray' }}>Delivered</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: order.progress === 'Delivered' ? 'black' : 'gray' }}>Pesanan Anda telah diterima dan sekarang sedang menunggu untuk diproses.</Text>
                    </View>
                </View>
                <View style={order.progress == "Completed" ? styles.cardServicesTrue : styles.cardServicesFalse} >
                    <View style={styles.timeline}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: order.progress === 'Completed' ? 'black' : 'gray' }}>Completed</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: order.progress === 'Completed' ? 'black' : 'gray' }}>Pesanan Anda telah diterima dan sekarang sedang menunggu untuk diproses.</Text>
                    </View>
                </View>

                <Modal isVisible={isModalVisible} >
                        <View style={styles.centeredView}>
                            <View style={styles.cardOrder}  >
                                <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10 }}>List Order Services : </Text>
                                {order?.result?.map((item, index) => (
                                    <View style={{ flexDirection: 'column' }} key={index}>
                                        <View style={styles.cardOrder} >
                                            <View style={styles.orderText}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name : {item.name}</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Price : Rp. {item.price}</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>{item.description}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={(e) => setPay({ ...pay, [index]: e })}
                                                placeholder="Enter Amount"
                                                value={pay}
                                                keyboardType="phone-pad"
                                            />
                                        </View>
                                    </View>
                                ))}
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10 }}>
                                <TouchableOpacity onPress={handleSubmit} style={{
                                    backgroundColor: '#0C94D2',
                                    borderRadius: 8,
                                    paddingVertical: 8,
                                    paddingHorizontal: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: -10,
                                    marginRight: 5,
                                    marginBottom: -10,
                                    width: 100
                                }}><Text style={{ color: 'white', fontWeight: 'bold' }}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setSelected('')} style={{
                                    backgroundColor: '#E3651D',
                                    borderRadius: 8,
                                    paddingVertical: 8,
                                    paddingHorizontal: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: -10,
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
            </ScrollView>
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
        borderColor: "#D4D4D4",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        marginTop: 10
    },
    positionUserImage: {
        flex: 1,
    },
    textContent: {
        flex: 2,
    },
    welcome: {
        fontWeight: "bold",
        marginTop: -10
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
        backgroundColor: '#0C94D2',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    payButton: {
        backgroundColor: '#0C94D2',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: 100,
        marginLeft: 5
    },
    claimButtonText: {
        color: 'white',
        fontWeight: 'bold',

    },
    nameText: {
        fontSize: 14,
        color: 'white',
    },
    cardOrder: {
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
    orderText: {
        fontSize: 14,
        padding: 10

    },
    inputContainer: {
        marginBottom: 5,
        marginLeft: -10,
    },
    label: {
        fontSize: 14,
        color: 'black',
        marginBottom: -5,
    },
    input: {
        height: 40,
        width: 330,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
        borderColor: "gray"
    },
    cardServicesTrue: {
        marginLeft: 10,
        backgroundColor: 'white',
        padding: 10,
        width: 'auto',
        height: 80,
        flexDirection: 'column',
        borderColor: "black",
        borderLeftWidth: 5,
    },
    cardServicesFalse: {
        marginLeft: 10,
        backgroundColor: 'white',
        padding: 10,
        width: 'auto',
        height: 80,
        flexDirection: 'column',
        borderColor: "gray",
        borderLeftWidth: 5,
    },
    serviceText: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: -5
    },
    timeline: {
        fontSize: 14,
        marginBottom: 10,
        marginTop: -5
    }
});
