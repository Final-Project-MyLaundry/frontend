// import { Image, ToastAndroid, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { SelectList } from "react-native-dropdown-select-list";
// import React from "react";


// export default function DetailOrder({ order , fetchOutlet}) {




//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView>
//                 <View style={styles.content}>
//                     <View style={styles.positionUserImage} >
//                         <Image
//                             source={require('../../assets/orderIcon2.png')}
//                             style={{ width: 80, height: 70 }}
//                         />
//                     </View>
//                     <View style={styles.textContent}>
//                         <Text style={styles.welcome}>No : {order._id} </Text>
//                         <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Status : <Text style={{ color: order?.progress === 'Accepted' ? 'green' : 'red', fontWeight: 'bold' }}>{order.progress}</Text>
//                         </Text>

//                         <SelectList
//                             setSelected={setSelected}
//                             data={Status}
//                             save="value"
//                             placeholder="Update Status"
//                             onSelect={handleSelect}
//                         />
//                     </View>
//                 </View>
//                 <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Notes : <Text style={{ fontWeight: 'normal', }}>
//                     {order.notes}
//                 </Text>
//                 </Text>
//                 <Text style={{ fontWeight: 'bold', fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10 }}>Services Order: </Text>
//                 {order?.result?.map((service, index) => (
//                     <View style={styles.cardServices} key={index} >
//                         <Image
//                             source={require('../../assets/order.png')}
//                             style={{ width: 40, height: 50, marginTop: 5 }}
//                         />
//                         <View style={styles.serviceText}>
//                             <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name : {service.name}</Text>
//                             <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>Price : Rp. {service.price}</Text>
//                             <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>{service.description}</Text>
//                         </View>
//                     </View>
//                 ))}
//                 <Text>Rincian : </Text>
//                 <View>
//                     {order?.result?.map((service, index) => (
//                         <View style={styles.serviceText} key={index}>
//                             <Text style={{ fontWeight: 'bold', fontSize: 12 }}>- {service?.name}</Text>
//                             <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>   Price : Rp. {service?.price} x {order.servicesId[index].qty}</Text>
//                         </View>
//                     ))}

//                 </View>
//                 <Text>Total Price : Rp. <Text style={{ fontWeight: 'bold' }}>{order?.totalAmount}</Text></Text>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         padding: 20,
//         borderTopWidth: 1,
//         borderColor: "#D4D4D4",
//     },
//     content: {
//         height: "auto",
//         flexDirection: 'row',
//         borderColor: "#D4D4D4",
//         borderBottomWidth: 1,
//         padding: 10
//     },
//     positionUserImage: {
//         flex: 1,
//     },
//     textContent: {
//         flex: 2,
//     },
//     welcome: {
//         fontWeight: "bold",
//         marginTop: -10
//     },
//     card: {
//         backgroundColor: '#0C94D2',
//         borderRadius: 15,
//         marginTop: 10,
//         marginBottom: 10,
//         padding: 10,
//         shadowColor: 'black',
//         shadowOffset: {
//             width: 10,
//             height: 10,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 6,
//         width: 'auto',
//         height: 130,
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//         flexDirection: 'row',
//         borderColor: "gray",
//         borderWidth: 1,
//         elevation: 7,
//     },
//     saldoContainer: {
//         flex: 1,
//         marginTop: 10,
//     },
//     saldoText: {
//         fontWeight: 'bold',
//         fontSize: 16,
//         color: 'white'
//     },
//     claimButton: {
//         backgroundColor: 'white',
//         borderRadius: 8,
//         paddingVertical: 8,
//         paddingHorizontal: 12,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     claimButtonText: {
//         color: 'black',
//         fontWeight: 'bold',

//     },
//     nameText: {
//         fontSize: 14,
//         color: 'white',
//     },
//     cardOrder: {
//         backgroundColor: 'white',
//         borderRadius: 15,
//         marginTop: 5,
//         marginBottom: 10,
//         padding: 10,
//         width: 'auto',
//         height: "auto",
//         flexDirection: 'column',
//         borderColor: "gray",
//         borderWidth: 1,
//     },
//     orderText: {
//         fontSize: 14,
//         padding: 10

//     },
//     inputContainer: {
//         marginBottom: 5,
//         marginLeft: -10,
//     },
//     label: {
//         fontSize: 14,
//         color: 'black',
//         marginBottom: -5,
//     },
//     input: {
//         height: 40,
//         width: 330,
//         margin: 12,
//         borderWidth: 1,
//         borderRadius: 5,
//         padding: 10,
//         color: 'black',
//         backgroundColor: 'white',
//         borderColor: "gray"
//     },
//     cardServices: {
//         backgroundColor: 'white',
//         borderRadius: 15,
//         marginBottom: 10,
//         padding: 10,
//         width: 'auto',
//         height: 80,
//         flexDirection: 'row',
//         borderColor: "gray",
//         borderWidth: 1,
//     },
//     serviceText: {
//         fontSize: 14,
//         marginLeft: 20,
//         marginBottom: 10
//     },

// });
