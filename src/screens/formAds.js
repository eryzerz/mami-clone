import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput, Button,Picker } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import { SearchBar } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'


import Maps from '../components/Maps'

export default class FormAds extends Component {

    static navigationOptions = ({ navigation }) => (
        {
            headerStyle: {
                elevation: 0
            },
            title: 'Pasang Iklan',
            headerTitleStyle: {
                color: 'green'
            }
        }
        
    )

    constructor(props) {
        super(props);
        this.state = {
            regions: {
                latitude: -6.059989,
                longitude: 106.7063,
                latitudeDelta: 0.025,
                longitudeDelta: 0.025,
            },
            prov : [],
            provPil: '',
            provPilId: [],
            kab : [],
            kabPil: '',
            search: '',
            photo: null,
            type: "Putri",
            city: "",
            village: "",
            region: "",
            province: "",
            name: "",
            price: "",
            room: "",
            latitude: "",
            longitude: "",
            photoURL: "",
            area: "",
            facility: "",
        },
        this. _getProvince()
        // this._getKabupaten()
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        }

    ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
            this.setState(
                {
                    photo: response
                }
            )
        }
    })
}

    handleSearch = (search) => {
        this.setState({search})
    }
    onRegionChange = (regions) => {
        this.setState({ regions });
      }

      simpanData = async () => {
        try {
          const userTokenTemp = await AsyncStorage.getItem('userToken');
          const userStrTemp = await AsyncStorage.getItem('userObj');
          const objUser = await JSON.parse(userStrTemp);
          let dataUser = {
            type: this.state.type,
            city: this.state.city,
            village: "test",
            region: this.state.region,
            province: this.state.provPil,
            name: this.state.name,
            cost: parseInt(this.state.price),
            room: parseInt(this.state.room),
            latitude:this.state.regions.latitude.toString(),
            longitude: this.state.regions.longitude.toString(),
            photoURL: "https://static.mamikos.com/uploads/cache/data/style/2019-07-03/17SrQbtt-540x720.jpg",
            area: this.state.area,
            facility:this.state.facility
          }
          console.log(dataUser)

          const configBarier = {
            headers: { Authorization: "bearer " + userTokenTemp }
          };
          axios.post("https://mamiclone-api.herokuapp.com/api/v1/dorms", dataUser,configBarier)
          alert('Berhasil ditambahkan')
          this.props.navigation.navigate('ListDorm')
        } catch (e) {
          console.log(`ERROR  : ${e}`)
        }
      }
      _aksiTambah = () => {
        this.simpanData();
      }
      _getProvince = async () => {
        const responseData = await axios.get("http://dev.farizdotid.com/api/daerahindonesia/provinsi");
        await this.setState({
          prov: responseData.data.semuaprovinsi,
          provPilId : responseData.data.semuaprovinsi[0].id
        })
        console.log(this.state.provPilId);
      }

    //   _getKabupaten = async () => {
    //     const responseData = await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/${'this.state.provPilId'}/kabupaten`);
    //     await this.setState({
    //       kab: responseData.data
    //     })
    //     console.log(this.state.kab);
    //   }

    render() { 
        const { photo } = this.state
        
        return (
            <View>
                <ScrollView>
                    <View>
                        <View style={styles.field}>
                            <Text style={styles.text}>Nama Kost </Text>
                            <TextInput placeholder='Masukan nama kost' underlineColorAndroid='#00b894' 
                               onChangeText={(name)=> this.setState({name})}
                            ></TextInput>
                            <Text style={styles.text}>Nama Provinsi  </Text>

                            <Picker
                                selectedValue={this.state.provPil}
                                style={{ flex: 1 }}
                                onValueChange={async (itemValue, itemIndex) =>
                                await this.setState({ provPil: itemValue })
                                } styles={{ fontSize: 18 }}>
                               {this.state.prov.map( (item,index) => {
                                   return (
                                    <Picker.Item key={item.id} label={item.nama} value={item.nama} 
                                        
                                    />
                                   )
                                })}
                            </Picker>

                            {/* <Picker
                                selectedValue={this.state.kabPil}
                                style={{ flex: 1 }}
                                onValueChange={async (itemValue, itemIndex) =>
                                await this.setState({ kabPil: itemValue })
                                } styles={{ fontSize: 18 }}>
                               {this.state.kab.map( (item,index) => {
                                   return (
                                    <Picker.Item key={item.id} label={item.nama} value={item.nama} 
                                        
                                    />
                                   )
                                })}
                            </Picker> */}


                            <Text style={styles.text}>Nama Kota  </Text>
                            <TextInput placeholder='Masukan Nama kota' underlineColorAndroid='#00b894'
                                 onChangeText={(city)=> this.setState({city})}
                            >
                            </TextInput>

                            <Text style={styles.text}>Nama Jalan  </Text>
                            <TextInput placeholder='Masukan Nama Jalan' underlineColorAndroid='#00b894'
                                 onChangeText={(region)=> this.setState({region})}
                            >
                            </TextInput>

                            <Text style={styles.text}>Harga Perbulan  </Text>
                            <TextInput placeholder='Masukan Harga perbulan' underlineColorAndroid='#00b894'
                                 keyboardType={'numeric'}
                                 onChangeText={(price)=> this.setState({price})}
                            >
                            </TextInput>

                            <Text style={styles.text}>Jumlah Kamar </Text>
                            <TextInput placeholder='Masukan Jumlah Kamar' underlineColorAndroid='#00b894'
                                 keyboardType={'numeric'}
                                 onChangeText={(room)=> this.setState({room})}
                            >
                            </TextInput>

                            <View style={{ marginBottom: 5 }}>
                            <View style={{
                                flexDirection: 'row',
                                paddingLeft: 5
                            }}>
                                <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#000'
                                }}>Jenis Kosan </Text>
                            </View>
                            <Picker
                                selectedValue={this.state.type}
                                style={{ flex: 1 }}
                                onValueChange={(itemValue, itemIndex) =>
                                this.setState({ type: itemValue })
                                } styles={{ fontSize: 18 }}>
                                <Picker.Item label="Putra" value="Putra" />
                                <Picker.Item label="Putri" value="Putri" />
                            </Picker>
                            </View>

                           

                            <Text style={styles.text}>Search Alamat </Text>
                            <SearchBar
                                lightTheme={true}
                                containerStyle={styles.searchBar}
                                inputContainerStyle={styles.input}
                                style={{ borderRadius: 20, width: 300, backgroundColor: 'white', height: 20}}
                                placeholder="Type Here..."
                                onChangeText={this.handleSearch}
                                value={this.state.search}
                            />                              

                            <View style={{
                            height: 250
                            }}>
                            <MapView style={{
                                width: '100%',
                                height: '100%'
                            }}
                                initialRegion={this.state.regions}
                                onRegionChangeComplete={this.onRegionChange}>
                                <Marker
                                coordinate={this.state.regions}
                                title={"Kosan"}
                                description={" - Marker kost - "}
                                />
                            </MapView>
                            </View>

                            <View style={{flexDirection:'row'}}>
                            <TextInput style={{flex:1}}
                             editable={false}
                            selectTextOnFocus={false}
                            value={this.state.regions.latitude.toString()}
                            placeholder='Latitude' underlineColorAndroid='#00b894'
                           
                              >
                             </TextInput>
                            <TextInput style={{flex:1}} 
                            editable={false}
                            selectTextOnFocus={false}
                            value={this.state.regions.longitude.toString()}
                            placeholder='longtitude' underlineColorAndroid='#00b894' 
                           
                            ></TextInput>
                            </View>
                            <Text style={styles.text}>Foto Iklan *</Text>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {photo && (
                                    <Image
                                        source={{ uri: photo.uri }}
                                        style={{ width: 300, height: 300 }}
                                    />
                                )}
                                <TouchableOpacity onPress={this.handleChoosePhoto} style={{backgroundColor:'green',
                                                                                            width: 100,
                                                                                            height: 20,
                                                                                            borderRadius: 20,
                                                                                            borderWidth: 0,
                                                                                            alignItems: 'center',marginBottom:30}}>
                                    <Text style={{color: 'white'}}>Upload Photo</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Luas Kamar</Text>
                            <TextInput placeholder='Masukan Luas Kamar, contoh 3 X 5' underlineColorAndroid='#00b894'
                                 onChangeText={(area)=> this.setState({area})}
                            >
                            </TextInput>

                            <Text style={styles.text}>Fasilitas</Text>
                            <TextInput placeholder='Contoh Wifi,Toilet,Kunci,Parkir' underlineColorAndroid='#00b894'
                                 onChangeText={(facility)=> this.setState({facility})}
                            >
                            </TextInput>
                           

                        </View>

                    </View>
                    <TouchableOpacity  onPress={this._aksiTambah}>
                    <View style={{padding:10,height:50,flex:1}}>
                        <View style={{backgroundColor:'green',flex:1,justifyContent:'center',alignSelf:'center',width:300,borderRadius:20,alignItems:'center'}}r>
                            <Text style ={{color:'white'}}>Submit</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                        
                </ScrollView>
               
            </View>

        )
    }
    backToProfile = () => {
        this.props.navigation.navigate('Profile');
    }

    callCenter = () => {
        this.props.navigation.navigate('CallCenter');
    }
}

const styles = StyleSheet.create({
    map: {
        backgroundColor: '#dfe6e9',
        padding: 20,
        height: 95,
        borderRadius: 4,
        borderWidth: 0,
        borderColor: 'black',
        marginRight: 10,
        height: 200,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        paddingLeft: 4,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    field: {
        marginLeft: 8,
        marginTop: 10,
        marginBottom: 50,
        marginRight: 8
    },
    searchBar: {
        backgroundColor:'white',
        width: 350,
        height: 40,
        borderRadius: 5,
        borderWidth: 0,
        marginVertical: 15,
        marginHorizontal: 15,
        elevation: 4,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 5,
        width: 350,
        height: 40,
        bottom: 9.5,
        right: 4
    },
})