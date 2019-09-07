import React, { Component } from 'react'
import { Button, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

class NavbarButton extends Component {
    state = {  }
    render() { 
        return (  <View style={styles.servicesWrapper}>
            <TouchableOpacity style={styles.services}>
                <Icon name='bed' style={styles.iconGreen}/>
                <Text style={styles.iconGreen}>Kostan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.services}>
                <Icon name='business' style={styles.iconGreen}/>
                <Text style={styles.iconGreen}>Hotel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.services}>
                <Icon name='basket' style={styles.iconGreen}/>
                <Text style={styles.iconGreen}>Toko</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.services}>
                <Icon name='briefcase' style={styles.iconGreen}/>
                <Text style={styles.iconGreen}>Kerja</Text>
            </TouchableOpacity>
        </View>
        )}
}
 
export default NavbarButton

const styles = StyleSheet.create({
    servicesWrapper: {
        backgroundColor: 'white', 
        paddingTop: 9, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal:15
    }
})