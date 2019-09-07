import React, { Component } from 'react'
import { Button, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { createStackNavigator,createNavigator, createSwitchNavigator } from 'react-navigation'

import ListViewNav from './listView'
import DetailView from './detailView'
import Promo from '../components/promo'
import Place from '../components/place'
import CityDetail from '../screens/cityDetail'
import ListDorm from '../screens/listDorm'
import FilterPage from './filterPage'
import Booking from './booking'
import Booklist from './booklist'
import KotaPopuler from '../components/KotaPopuler'
import NavbarButton from '../components/NavbarButton'
import Maps from '../components/Maps'
import ListAd from './listAds'
import FormAd from './formAds'

class Explore extends Component {
    
    static navigationOptions= ({ navigation }) => (
        {   title: 'Search City',
            headerStyle: {
                elevation: 0,
            },
            headerLeft: (
                <TouchableHighlight>
                    <Icon name="flame" size={30} style={styles.iconGreen}/>
                </TouchableHighlight>
            ),
            title: 'mamikos.com',
            headerTitleStyle: {
                color: 'green'
            },
            headerRight: (
                <TouchableOpacity onPress={() => (navigation.navigate('ListView'))}>
                    <Icon name='search' size={28} style={{color: 'green', marginRight: 14}}/>
                </TouchableOpacity>
            )
        }  
        )
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#white'}}>

            <NavbarButton />
                <ScrollView>
                    <Promo />
                    <View style={styles.adsBorder}>
                        <View style={{flex: 2, alignSelf: 'center'}}>
                            <Text style={{marginLeft: 20, fontSize: 24, color: 'green'}}>Ingin pasang iklan?</Text>
                        </View>
                        <View style={{flex: 1, alignSelf: 'center'}}>
                            <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('ListAd')}>
                                <Text style={styles.text}>Pasang</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <KotaPopuler action={() => this.props.navigation.navigate('ListView')}/>
                </ScrollView>
            </View>
        )
    }
}



const ExploreNavigator = createStackNavigator(
        {
            Explore: {
                screen : Explore
            },
            ListView: {screen : ListViewNav,
                navigationOptions: { headerTitle: 'Cari Alamat Kost', headerTitleStyle: {
                    color: 'green',
                } },
               
            },
            ListDorm:ListDorm,
            DetailView: {screen : DetailView,
                navigationOptions: { headerTitle: 'Detail Kost', headerTitleStyle: {
                    color: 'green'
                } },
               
            },
            CityDetail: CityDetail,
            FilterPage: FilterPage,
            Booking: {screen : Booking,
                navigationOptions: { headerTitle: 'Pesan sekarang', headerTitleStyle: {
                    color: 'green'
                } },
               
            },
            // Booking: Booking,
            Booklist:Booklist,
            ListAd : ListAd,
            FormAd : FormAd
        },
        {
            initialRouteName: 'Explore',
            headerMode: 'float'
        }
    
)

ExploreNavigator.navigationOptions = ({navigation}) => {
    let { routeName } = navigation.state.routes[navigation.state.index]
        let navigationOptions = {}
        if ( routeName === 'ListView' || routeName === 'FilterPage' || routeName === 'CityDetail') {
            navigationOptions.tabBarVisible = false
        }
        return navigationOptions
}

export default ExploreNavigator


const styles = StyleSheet.create({
    iconGreen: {
        color: 'green',
        marginLeft: 20,
    },
    adsBorder: { 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        marginVertical: 20, 
        borderWidth: 1, 
        borderColor: 'silver', 
        borderRadius: 23, 
        marginHorizontal: 10
    },
    services: {
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'    
    },
    servicesWrapper: {
        backgroundColor: 'white', 
        paddingTop: 9, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    text: {
        color: 'white'
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 18,
        paddingTop: 16,
        width: 100,
        borderRadius: 20,
        elevation: 10,
        margin: 4
    },
})