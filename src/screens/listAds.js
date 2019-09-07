import React, { Component } from 'react'
import { Image, TextInput, FlatList, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { withNavigation, createMaterialTopTabNavigator } from 'react-navigation'



const ads = [
    {
        id: '0',
        name: 'Kost Priya Bahagia',
        address: 'Jl. Ahmad Fuadi No. 25',
        image: 'https://www.finansialku.com/wp-content/uploads/2018/02/Ketahui-Manajemen-Rumah-Kost-Dengan-Baik-dan-Benar-01-Finansialku.jpg'
    },
    {
        id: '1',
        name: 'Kost Mahal Sekali',
        address: 'Jl. Rupiah Ceria No.1',
        image: 'https://www.lamudi.co.id/static/cms/content-section/17-CW27-9_pic1.jpg'
    },
    {
        id: '2',
        name: 'Kost Abadi',
        address: 'Jl. Cendrawasih Setia No.5',
        image: 'https://assets-a2.kompasiana.com/items/album/2016/04/11/rumah-kost-570ba81a2e7a613219366dcd.jpg?t=o&v=350'
    },
    {
        id: '3',
        name: 'Kost Priya Bahagia',
        address: 'Jl. Ahmad Fuadi No. 25',
        image: 'https://www.finansialku.com/wp-content/uploads/2018/02/Ketahui-Manajemen-Rumah-Kost-Dengan-Baik-dan-Benar-01-Finansialku.jpg'
    },
    {
        id: '4',
        name: 'Kost Mahal Sekali',
        address: 'Jl. Rupiah Ceria No.1',
        image: 'https://www.lamudi.co.id/static/cms/content-section/17-CW27-9_pic1.jpg'
    },
]

export default class ListAds extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    handleSearch = (search) => {
        this.setState({search})
    }

    static navigationOptions = ({ navigation }) => (
        {
            title: 'Daftar Iklan',
            headerStyle: {
                elevation: 0
            },
            headerTitleStyle: {
                color: 'green'
            }
        }
    )

    _keyExtrractor = (item, index) => item.id;

    render () {
        const { search } = this.state
        return (
            <View>
                <SearchBar
                    lightTheme={true}
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.input}
                    style={{ borderRadius: 20, width: 300, backgroundColor: 'white'}}
                    placeholder="Type Here..."
                    onChangeText={this.handleSearch}
                    value={this.state.search}
                />
                <FlatList 
                    style={{ marginBottom: 160}}
                    data={ads}
                    keyExtractor={this._keyExtrractor}
                    renderItem={({ item }) => (
                        <View key={item.id} style={styles.card}>
                            <Image source={{uri: item.image}} style={styles.image} />
                            <View style={styles.text}>
                                <Text style={{ fontWeight: 'bold'}}>
                                    {item.name}
                                </Text>
                                <Text>
                                    {item.address}
                                </Text>
                            </View>
                        </View>
                    )}
                />
                <View style={{ alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress= {() => this.props.navigation.navigate('FormAd')}
                    >
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>Pasang Iklan</Text>
                    </TouchableOpacity>
                </View>
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
        padding: 5, 
        margin: 8, 
        borderRadius: 30, 
        backgroundColor: 'white', 
        elevation: 6,
        flexDirection: 'row',
        alignContent: 'center'
    },
    button: {
        paddingTop: 8,
        position: 'absolute',
        bottom: 8,
        backgroundColor:'green',
        width: 380,
        height: 50,
        borderRadius: 20,
        borderWidth: 0,
        marginVertical: 100,
        marginHorizontal: 15,
        elevation: 7,
        alignItems: 'center'
    },
    image: { 
        borderRadius: 20, 
        width: 100, 
        height: 90, 
        alignSelf: 'center', 
        flex:1
    },
    text: {
        flexDirection: 'column', 
        flex: 1.5, 
        paddingLeft: 2, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})