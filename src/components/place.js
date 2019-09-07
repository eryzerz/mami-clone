import React, { Component } from 'react';
import { Image, View, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import CityDetail from '../screens/cityDetail'

const cities = [
    {
        city: 'DKI Jakarta',
        imageUrl: 'http://1.bp.blogspot.com/-qHutZ4DhL2s/UjyZ9bMJdeI/AAAAAAAACQg/F2q1ymGR814/s1600/Monas.jpg'
    },
    {
        city: 'Bogor',
        imageUrl: 'https://merahputih.com/media/54/78/57/547857a5a91fbf075a7cc79e3f78ae21.jpg'
    },
    {
        city: 'Bandung',
        imageUrl: 'https://www.nationsonline.org/gallery/Indonesia/Gedung-Sate-Bandung.jpg'
    },
    {
        city: 'Ibukota Jakarta',
        imageUrl: 'http://1.bp.blogspot.com/-qHutZ4DhL2s/UjyZ9bMJdeI/AAAAAAAACQg/F2q1ymGR814/s1600/Monas.jpg'
    },
    {
        city: 'Buitenzorg',
        imageUrl: 'https://merahputih.com/media/54/78/57/547857a5a91fbf075a7cc79e3f78ae21.jpg'
    },
]

export default class Places extends Component {
    render() {
        return (
            <View>
                <View style={{ paddingLeft: 20}}>
                    <Text>Kota Populer</Text>
                </View>
                <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                    {cities.map((link, index) => {
                        return (
                            <Card key={index} style={{height: 240, marginHorizontal: 10}} transparent >
                                    <CardItem style={{flexDirection: 'column'}} cardBody>
                                        <TouchableOpacity onPress={this.props.action}>
                                            <Image 
                                                source={{uri: link.imageUrl}} 
                                                style={{height: 140, width: 130, flex: 1}}
                                            />
                                            <Text style={{alignSelf: 'center'}}>{link.city}</Text>
                                        </TouchableOpacity>
                                    </CardItem>
                            </Card>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}