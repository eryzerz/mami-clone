import React, { Component } from 'react';
import { Image, View, ScrollView, TouchableHighlight, TouchableOpacity,StyleSheet,FlatList,Text,CheckBox 
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import ListDorm from './listDorm'

import Booklist from './booklist'

class Booking extends Component {

    static navigationOptions = ({ navigation }) => (
        {
            headerStyle: {
                elevation: 0
            }
        }
    )

    constructor(){
        super()
        this.state = {
        is_done : false,
        date: '2019-08-19'
        }
    }
    
    render() { 
        const item = this.props.navigation.getParam('item')
        return ( 
            
            <View>
                        <ScrollView>
                        
                            <View style={{justifyContent:'center'}}>
                            <View style={{alignContent:'center',marginBottom: 20}}>
                                <View style={styles.navbar}>
                                    <View style={{flex:1}}>
                                        <Text style={{paddingLeft: 50, fontWeight: 'bold' }}>Tanggal Masuk</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{paddingLeft: 40, fontWeight: 'bold' }}>Tanggal Keluar</Text>
                                    </View>
                                </View>
                                
                                <View style={{flexDirection:'row'}}>
                                <View style={{flex:1,paddingLeft:40}}>
                                    <DatePicker
                                        style={{width: 97}}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                opacity: 0
                                            },
                                            dateInput: {
                                                marginLeft: 6,
                                                borderRadius: 10
                                            }
                                        }}
                                        onDateChange={(date) => {this.setState({date: date})}}
                                    />
                                </View>
                            
                            
                                <View style={{flex:1,paddingLeft:20}}>
                                    <DatePicker
                                        style={{width: 120}}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                opacity: 0,
                                            },
                                            dateInput: {
                                                marginRight: 30,
                                                borderRadius: 10
                                            }
                                        }}
                                        onDateChange={(date) => {this.setState({date: date})}}
                                    />
                                    </View>
                                </View>
                            </View>
                
                            </View>

                            <View style={{backgroundColor:'white',borderBottomColor:'gray',borderWidth:0.4,marginHorizontal:20, marginVertical: 20}}>

                            </View>

                        <View style={{flexDirection:'row',padding:15}}>
                            <View style={{flex:1,padding:10}}>
                            <Image source={{uri: item.photoURL}} style={{width: 120, height: 110,borderColor:'gray',borderWidth:0.7}}/>
                            </View>
                            <View style={{flex:2,backgroundColor:'white',padding:20}}>
                                <Text style={styles.text}>{item.name}</Text>
                                <View style={{paddingTop:40}}><Text style={{fontWeight:'bold'}}>Rp{item.cost}/bulan</Text></View>
                                
                            </View>
                        </View>

                        <View style={{backgroundColor:'white',borderBottomColor:'gray',borderWidth:0.4,marginHorizontal:20}}>

                        </View>

                        <View style={{padding:20}}>
                                <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                                <View style={{flex:1}}><Text style={{fontSize:18}}>Data Penghuni</Text></View>
                                <View style={{flex:1}}><Text style={{color:'red',fontSize:18}}>Ubah</Text></View>
                                </View>
                                <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                                <View style={{flex:1}}><Text style={{color:'gray'}}>Nama Lengkap</Text></View>
                                <View style={{flex:1}}><Text>Username</Text></View>
                                </View>

                                <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                                <View style={{flex:1}}><Text style={{color:'gray'}}>Jenis Kelamin</Text></View>
                                <View style={{flex:1}}><Text style={{}}>Laki-Laki</Text></View>
                                </View>
                                <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                                <View style={{flex:1}}><Text style={{color:'gray'}}>No Hp</Text></View>
                                <View style={{flex:1}}><Text>0822313235</Text></View>
                                </View>
                                <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                                <View style={{flex:1}}><Text style={{color:'gray'}}>Pekerjaan</Text></View>
                                <View style={{flex:1}}><Text>Lainya</Text></View>
                                </View>

                        </View>

                        <View style={{backgroundColor:'white',borderBottomColor:'gray',borderWidth:0.4,marginHorizontal:20}}>

                        </View>

                        <View style={{height:60,padding:20}}>
                            <Text tyle={{fontSize:20,fontWeight:'bold'}}>Keterangan Biaya lain</Text>
                        </View>

                        <View style={{ flexDirection: 'column',marginLeft:20}}>
                            
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                value={this.state.is_done}

                                onValueChange={() => this.setState({ is_done: !this.state.is_done })}
                                />
                                <Text style={{marginTop: 5}}>Saya Menyetujui syarat dan ketentuan yang berlaku</Text>
                            </View>
                        </View>


                        <View style={{padding:20,backgroundColor:'white',justifyContent:'center'}}>
                            <TouchableOpacity disabled={!this.state.is_done}
                            onPress={()  => this.props.navigation.navigate('Booklist')}>
                                <View  style={{backgroundColor:'green',justifyContent:'center',height:40,alignItems:'center',borderRadius:8}}>
                                <Text style={{color:'white'}} >Pesan</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                            
                        </ScrollView>
                        </View> 
            );
        }
    }
    
export default Booking;
const styles = StyleSheet.create({
    navbar : {
        justifyContent:'center',
        flex:1,
        marginBottom: 20,
        alignContent:'center',
       
        flexDirection:'row'
    },
    text : {
        fontSize:16,
    }
})