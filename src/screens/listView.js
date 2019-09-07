import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, 
        Content, 
        Icon,  
        Header, 
        Left, 
        Body, 
        Right, 
        Button, 
        Thumbnail, 
        Title,
        Item, 
        Input } from 'native-base'
import { SearchBar } from 'react-native-elements'
import { withNavigation, createMaterialTopTabNavigator } from 'react-navigation'

import Maps from '../components/Maps'
import ListDorm from './listDorm'


class ListView extends Component {
    render() {
        return (
            <View>
            </View>
        )
    }
}

const ListViewNav = createMaterialTopTabNavigator(
    {
        Maps: {
            screen: Maps,
            navigationOptions: {
                title: 'Lihat Peta'
            }
        },
        ListDorm: {
            screen: ListDorm,
            navigationOptions: {
                title: 'Lihat Daftar'
            }
        }
    },
    {
        headerMode: 'none',
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                backgroundColor: 'green'
            }
            
        },
        
    }
)

export default ListViewNav


const styles = StyleSheet.create({
    header: { 
        backgroundColor:'white',
        elevation: 0
    },
    left: { 
        paddingLeft: 6, 
        flex: 0, 
        width: 62 
    },
    backButton: {
        backgroundColor: 'white', 
        elevation: 0
    },
    backArrow: {
        backgroundColor: 'white', 
        color: 'green'
    },
    item: { 
        elevation: 5
    },
    icon: {
        color: 'green'
    }
})