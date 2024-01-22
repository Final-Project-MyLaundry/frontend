import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetailOutlet() {

    const data = {
        _id: "65a8eb61cbca81fd2982c110",
        name: "james",
        email: "james@gmail.com",
        password: "$2a$10$YwQOHyWZg/5OJsYRK7JtQejTvncBUDN0Tx8lmQqkbRUO//CzqyQku",
        address: {
            street: "Jln Tanah Kusir 4",
            village: "Pondok Indah",
            distric: "Kebayoran Lama",
            city: "Jakarta Selatan"
        },
        phone: "0899999999999",
        createdAt: "2024-01-18T09:14:02.820Z",
        updatedAt: "2024-01-18T09:14:02.820Z",
        outlets: [
            {
                "_id": "65a7b482a9ba1cceb2bd830a",
                name: "Laundry Wahyu",
                address: {
                    street: "123 Main Street",
                    village: "Pondok Indah",
                    district: "District X",
                    city: "City Z"
                },
                phone: "555-1234",
                services: [
                    {
                        name: "Service A",
                        "description": "Description A",
                        price: 20000
                    },
                    {
                        name: "Service B",
                        "description": "Description B",
                        price: 30000
                    },
                    {
                        name: "Service C",
                        "description": "Description C",
                        price: 40000
                    }
                ],
                reviews: [
                    {
                        "userId": 1,
                        "username": "Bambang",
                        "rating": 4.5,
                        "review": "Great service!"
                    },
                    {
                        "userId": 2,
                        "username": "Asep",
                        "rating": 5,
                        "review": "Excellent experience!"
                    },
                    {
                        "userId": 3,
                        "username": "Maldini",
                        "rating": 5,
                        "review": "Excellent Discrod!"
                    }
                ],
                userId: "65a8eb61cbca81fd2982c110",
                statusOpen: false,
                createdAt: "2024-01-16T14:00:00Z",
                updatedAt: "2024-01-16T14:30:00Z",
                image: "https://i.pinimg.com/236x/05/03/76/050376e45a3479b9bde9d35e42965925.jpg"
            }
        ]
    }

    const navigation = useNavigation()

    const renderService = ({ item }) => (
        <View style={styles.serviceContainer}>
            <Text>Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price: Rp. {item.price}</Text>
        </View>
    );

    const renderReview = ({ item }) => (
        <View style={styles.reviewContainer}>
            <Text>{item.username}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Review: {item.review}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image
                        source={{ uri: data.outlets[0].image }}
                        style={styles.outletImage}
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.outletName}>{data.outlets[0].name}</Text>
                        <Text style={styles.outletAddress}>
                            Alamat: {data.outlets[0].address.street},{' '}
                            {data.outlets[0].address.village},{' '}
                            {data.outlets[0].address.district}, {data.outlets[0].address.city}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Services :</Text>
                <View>
                    <FlatList
                        data={data.outlets[0].services}
                        renderItem={renderService}
                        keyExtractor={(item) => item.name}
                        initialNumToRender={3}
                        maxToRenderPerBatch={3}
                        windowSize={3}
                    />
                </View>

                <Text style={styles.sectionTitle}>Reviews :</Text>
                <FlatList
                    data={data.outlets[0].reviews}
                    renderItem={renderReview}
                    keyExtractor={(item) => item.userId.toString()}
                    initialNumToRender={3}
                    maxToRenderPerBatch={3}
                    windowSize={3}
                />
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    content: {
        flexDirection: 'row',
        marginTop: 10,
    },
    outletImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 8,
    },
    textContent: {
        flex: 1,
    },
    outletName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
    },
    outletAddress: {
        fontSize: 16,
        marginTop: 5,
        color: 'gray',
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    transactionContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
    },
    serviceContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
    },
    reviewContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
    }
});