import React, { Component } from 'react'
import { Container,  Header, Left, Body, Right, Title } from 'native-base';
import { TextInput, StyleSheet, View, Button, Text, Image, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'


import Signup from './signup'
import Profile from './profile'
import ListAds from './listAds'
import FormAds from './formAds'
import Booklist from './booklist'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

          email: '',
          password: '',
          userToken: ''

        }
       this._cekLogin();

    }
    static navigationOptions = ({ navigation }) => (
        {
            title: 'Login',
            headerTitleStyle: {
                color: 'green'
            },
            headerStyle: {
                elevation: 0
            }
        }
    )
    _cekLogin = async () => {
        
          const value = await AsyncStorage.getItem('userToken');
          if (value) {
            // We have data!!
            this.props.navigation.navigate('HomeNavigator')
          }else {
            this.props.navigation.navigate('Login')
          }
      };

    _Login = async () => {
        
        
            axios.post('http://mamiclone-api.herokuapp.com/api/v1/login',{
                email: this.state.email,
                password: this.state.password

            })
                .then(res => {
                    console.log(res)
                if(typeof res.data.token !== undefined && res.data.error !== true) {

                    AsyncStorage.setItem('userToken', res.data.token);

                    this.props.navigation.navigate('HomeNavigator')
                }else {
                    alert('Login Gagal')
                }
            })
            .catch(error => {
                alert(error);

            });
        }
    
    render() {
        return (
            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            >
            <Text>{this.state.username}</Text>
                <View style={{ justifyContent: 'center'}}>
                    <Image style={styles.imgResize} source={require('../assets/img/undraw_synchronize_ccxk.png')}/>
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <TextInput style={styles.textInput} placeholder='Email'
                        onChangeText={(email)=> this.setState({email})}
                    />
                    <TextInput secureTextEntry={true}
                    style={styles.textInput} placeholder='Password' 
                    onChangeText={(password)=> this.setState({password})}
                    />
                </View>
                <View style={{ justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => this._Login()}>
                        <Text style={styles.text}>Masuk</Text>
                    </TouchableOpacity>
                {/* action={()=> this.props.navigation.navigate('Profile')} */}
                    <TouchableOpacity style={styles.buttonRegister} onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={styles.text}>Daftar</Text>
                    </TouchableOpacity>

                
                </View>
            
            </KeyboardAvoidingView>
        );
    }
}

const RegistrationNavigator = createStackNavigator(
    {
        Login: Login,
        Signup: Signup,
        Profile: Profile,
        ListAds: ListAds,
        FormAds: FormAds,
        Booklist: Booklist
    },
    {
        initialRouteName: 'Login',
        headerMode: 'float'
    }

)

export default RegistrationNavigator

RegistrationNavigator.navigationOptions = ({navigation}) => {
    let { routeName } = navigation.state.routes[navigation.state.index]
        let navigationOptions = {}
        if ( routeName === 'Profile' || routeName === 'Booklist' || routeName === 'Signup' || routeName === 'ListAds' || routeName === 'FormAds') {
            navigationOptions.tabBarVisible = false
        }
        return navigationOptions
}

const styles = StyleSheet.create({
    imgResize: {
        height: 175,
        width: 300,
        aspectRatio: 1.0,
        alignSelf: 'center',
        margin: 25
    },
    textInput: { 
        alignSelf: 'center', 
        borderWidth: 0.5, 
        borderRadius: 20, 
        width: 300, 
        paddingLeft: 20,
        marginBottom: 10,
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    buttonLogin: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
        height: 20,
        padding: 20,
        paddingTop: 15,
        width: 300,
        borderRadius: 20,
        elevation: 7,
        marginTop: 10
    },
    buttonRegister: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'gray',
        height: 20,
        padding: 20,
        paddingTop: 15,
        width: 300,
        borderRadius: 25,
        elevation: 7,
        marginTop: 10
    },
    text:{
        bottom: 10,
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
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
    }
})