import React, { Component } from 'react';
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'

class Button extends Component {
    state = {  }
    render() { 
        return (  
                    <TouchableOpacity style={styles.button} onPress={this.props.action}>
                        <Text style={styles.text}>{this.props.title}</Text>
                    </TouchableOpacity>
                    
                 );
    }
}
 
export default Button;
const styles = StyleSheet.create({ 
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 20,
        paddingTop: 15,
        width: 300,
        borderRadius: 25,
        elevation: 7,
        height: 20,
    },
    text : {
        bottom: 10,
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }
})