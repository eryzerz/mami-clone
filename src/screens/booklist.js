import React, { Component } from 'react'
import { Image, TextInput, FlatList, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { withNavigation, createMaterialTopTabNavigator } from 'react-navigation'


const books = [
    {
        id: '0',
        type: 'Campur',
        city: 'Medan',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost D'eiffel Medan Petisah",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-03/ZIihOxY2-540x720.jpg'
    },
    {
        id: '1',
        type: 'Putri',
        city: 'Medan',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost Seikera Gg Rezeki",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2018-12-14/YzhzNQsY-540x720.jpg'
    },
    {
        id: '2',   
        type: 'Putra',
        city: 'Jakarta Selatan',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost Mampang Ceria",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-09/HpPoK7Yf-540x720.jpg'
    },
    {
        id: '3',
        type: 'Campur',
        city: 'Bogor',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost IPB",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-03/ZIihOxY2-540x720.jpg'
    },
    {
        id: '4',
        type: 'Campur',
        city: 'Medan',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost D'eiffel Medan",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-03/ZIihOxY2-540x720.jpg'
    },
    {
        id: '5',
        type: 'Putri',
        city: 'Medan',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost Seikera Gg Rezeki",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2018-12-14/YzhzNQsY-540x720.jpg'
    },
    {
        id: '6',   
        type: 'Putra',
        city: 'Jakarta Selatan',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost Mampang Ceria",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-09/HpPoK7Yf-540x720.jpg'
    },
    {
        id: '7',
        type: 'Campur',
        city: 'Bogor',
        booking: '12 Agu 2019',
        duration: '1 bulan',
        name: "Kost IPB",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-03/ZIihOxY2-540x720.jpg'
    }
]

export default class Booklist extends Component {

    static navigationOptions = ({ navigation }) => (
        {
            title: 'Daftar Pemesanan',
            headerStyle: {
                elevation: 0,
            },
            headerTitleStyle: {
                color: 'green'
            },
        }
    )

    _keyExtrractor = (item, index) => item.id;

    render () {
        return (
            <View>
                <FlatList 
                    style={{ marginBottom: 5}}
                    data={books}
                    keyExtractor={this._keyExtrractor}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} style={styles.card}>
                            <Image source={{uri: item.image}} style={styles.image} />
                            <View style={styles.text}>
                                <Text style={{alignSelf: 'flex-start', fontWeight: 'bold'}}>
                                    {item.name}
                                </Text>
                                <View style={{ flexDirection: 'row'}}>
                                    <View style={{flex:1}}>
                                        <Text>
                                            Booking
                                        </Text>
                                        <Text>
                                            {item.booking}
                                        </Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>
                                            Durasi Sewa
                                        </Text>
                                        <Text>
                                            {item.duration}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.button}>
                                    <Text style={{ color: 'silver', alignSelf: 'center'}}>Menunggu Konfirmasi</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor:'white',
        width: 380,
        height: 50,
        borderRadius: 20,
        borderWidth: 0,
        marginVertical: 15,
        marginHorizontal: 15,
        elevation: 7,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 20
    },
    card: { 
        width: 390, 
        paddingBottom: 1, 
        margin: 8, 
        borderRadius: 30, 
        backgroundColor: 'white', 
        elevation: 6,
        flexDirection: 'row',
        alignContent: 'center'
    },
    button: {
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: 'silver',
        width: 100,
        height: 20,
        borderRadius: 20,
        borderWidth: 0,
        alignItems: 'center',
    },
    image: { 
        borderRadius: 20,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0, 
        width: 100, 
        height: 120, 
        alignSelf: 'center', 
        flex:1
    },
    text: {
        flexDirection: 'column', 
        flex: 1.5, 
        paddingLeft: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})