import React, { Component } from 'react'
import { Rating, AirbnbRating } from 'react-native-elements'
import { View, Image, ScrollView, TouchableHighlight, TouchableOpacity, Share } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Item } from 'native-base'


import Booking from './booking'


const icons = [
    {
        icon: 'ios-wifi',
        desc: 'Wi-Fi'
    },
    {
        icon: 'ios-bulb',
        desc: 'AC'
    },
    {
        icon: 'ios-key',
        desc: 'Security'
    },
    {
        icon: 'ios-tv',
        desc: 'TV'
    },
    {
        icon: 'volume-off',
        desc: 'Quite'
    }
]

export default class DetailView extends Component {

    state = {
        isPhoto:true
    }

    share = async () => {
        try {
            const result = await Share.share({
                message:
                'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                // shared with activity type of result.activityType
                } else {
                // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
            } catch (error) {
            alert(error.message);
            }
        };



    _isViewRendered(isPhoto, item){
        if(isPhoto){
            return(
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                    <Card style={{flex: 1, height: 200, width: 400, marginHorizontal: 10}} transparent >
                                <CardItem style={{flexDirection: 'column'}}>
                                    <TouchableHighlight>
                                        <Image 
                                            source={{uri: item.photoURL}} 
                                            style={{ flex: 1, aspectRatio: 2.5}}
                                        />
                                    </TouchableHighlight>
                                </CardItem>
                            </Card>
                </ScrollView>
            )
        }else{
            <Text>Ini Map</Text>
        }
    }

    controlViewRender(isPhoto){
        this.setState({
            isPhoto:true
        })
    }

    render() {
        const item = this.props.navigation.getParam('item')
        return (
            <View>
                {this._isViewRendered(this.state.isPhoto, item)}

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: '#323633', height: 65, width: 450}}>
                    <TouchableOpacity style={{flex:1, alignSelf: 'center', marginHorizontal: 25}}
                    onPress={() => this.setState({
                        isPhoto:true
                    })}
                    >
                        <Icon name='images' size={28} style={{ color: 'white'}} />
                        <Text style={{ color: 'white'}}>Foto</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{flex:1, alignSelf: 'center', marginHorizontal: 50, marginRight: 80}}
                    onPress={() => this.props.navigation.navigate("Maps")}
                    >
                        <Icon name='map' size={28} style={{ color: 'white'}}/>
                        <Text style={{ color: 'white'}}>Peta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1, alignSelf: 'center'}}>
                        <Icon name='compass' size={28} style={{ color: 'white'}}/>
                        <Text style={{ color: 'white'}}>360</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 1, borderColor: '#d5ded7'}}>
                        <View style={{ flex:2, margin: 15 }}>
                            <View >
                                <Text style={{ color: 'green'}}>{item.type}   Tersisa {item.room} Kamar </Text>
                            </View>
                            <View >
                                <Text style={{ fontSize: 30, fontWeight:'bold'}}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={{ color: 'gray'}}>{item.latestUpdate}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ flexDirection: 'row'}}>

                        <TouchableOpacity>
                        <Icon style={{ color: 'red' , marginRight: 20}} name='ios-heart-empty' size={28} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.share}>
                                <Icon style={{ color: 'gray', marginRight: 20}} name='share' size={28} />
                            </TouchableOpacity>
                         </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#d5ded7'}}>
                        <View style={{ flexDirection: 'row'}}>
                            <Icon name='add-circle' size={3} style={{color: 'green', marginRight: 5}}/>
                            <Text>Tidak termasuk listrik</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Icon name='add-circle' size={3} style={{color: 'green', marginRight: 5}}/>
                            <Text>Tidak ada min. bayar</Text>
                        </View>
                    </View>
                    <View style={{ padding: 15}}>
                        <View style={{alignSelf:'flex-start', paddingBottom: 10}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20}}>Luas Kamar</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 18}}>
                            <Icon name='resize' size={28} style={{ color: 'green', marginRight: 10}} />
                            <Text style={{ fontSize: 15, color: 'gray'}}>
                                5 x 3 m
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20}}>  
                                Fasilitas kost dan kamar
                            </Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false}>
                                {icons.map((link, index) => {
                                    return (
                                        <Card key={index} style={{flex: 1, height: 80, width: 110, marginHorizontal: 5}} transparent >
                                            <CardItem style={{flexDirection: 'column'}}>
                                                <TouchableHighlight>
                                                    <View>
                                                        <Icon
                                                        name={link.icon} 
                                                        style={{ flex: 1, aspectRatio: 2.5, resizeMode: 'contain', color: 'green'}}
                                                        />
                                                        <Text style={{ color: 'green'}}>{link.desc}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </CardItem>
                                        </Card>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', padding: 25}}>
                        <View style={{ flex: 1}}>
                            <View>
                                <Text>Kebersihan</Text>
                                <Rating readonly imageSize={15} startingValue={2} />
                            </View>
                            <View>
                                <Text>Keamanan</Text>
                                <Rating readonly imageSize={15} startingValue={4} />
                            </View>
                            <View>
                                <Text>Fasilitas Kamar</Text>
                                <Rating readonly imageSize={15} startingValue={1} />
                            </View>
                        </View>
                        <View style={{flex:1}}>  
                            <View>
                                <Text>Kenyamanan</Text>
                                <Rating readonly imageSize={15} startingValue={3} />
                            </View>
                            <View>
                                <Text>Harga</Text>
                                <Rating readonly imageSize={15} startingValue={5} />
                            </View>
                            <View>
                                <Text>Fasilitas Umum</Text>
                                <Rating readonly imageSize={15} startingValue={2} />
                            </View>
                        </View>
                    </View>
                    <View style={{padding:25}}>
                        <Text style={{ fontSize:20, fontWeight: 'bold'}}>
                            Verifikasi
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='add-circle' size={12} style={{color: 'green', marginRight: 10}}/>
                            <Text>Kost belum dikunjungi</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#b8d9d8', padding: 15, marginHorizontal: 15, borderRadius: 10}}>
                        <View style={{flex:2, marginRight: 20}}>
                            <Text>Ada data yang kurang tepat atau kendala lain dengan kost?</Text>
                        </View>
                        <TouchableOpacity style={{flex:1, alignSelf: 'center', marginLeft: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 20, height: 30}}>
                            <Text style={{alignSelf: 'center'}}>Laporkan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding: 25}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                            Kos Menarik Lainnya
                        </Text>
                        <View>
                            <View>

                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 300, padding: 25, borderWidth: 1, flexDirection: 'row', width: 380, padding: 20, marginHorizontal: 15, borderRadius: 10, borderColor: 'gray'}}>
                        <View style={{flex:2, marginTop: 10}}>
                            <Text style={{fontWeight: 'bold',  color:'gray'}}>Rp {item.cost} /bulan </Text>
                        </View>
                        <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 5, borderColor: 'red', marginRight: 5, paddingLeft: 20}}>
                            <Text style={{flex:1, alignSelf: 'center', color: 'red', fontWeight: 'bold'}}>Hubungi kost</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Booking', {item})}  style={{flex:1, justifyContent: 'center', borderRadius: 5, backgroundColor: 'red', paddingLeft: 25}}>
                            <Text style={{color: 'white'}}>Pesan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}