import React, { Component } from 'react';
import { Modal, View, ScrollView, StyleSheet, TouchableOpacity, Picker, Text, TextInput, Button } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group'

export default class Filter extends Component {

    static navigationOptions = ({navigation}) => (
        {
            headerStyle: {
                elevation: 0,
            }
        }
        
    )

    constructor(props) {
        super(props)
        this.state = {
            facilities: [
                {
                    label: 'AC',
                    size: 12
                },
                {
                    label: 'Almari Pakaian',
                    size: 12
                },
                {
                    label: 'TV',
                    size: 12
                },
                {
                    label: 'Internet',
                    size: 12
                },
                {
                    label: 'Kamar Mandi',
                    size: 12
                },
                {
                    label: 'Parkir Mobil',
                    size: 12
                },
            ]
        }
    }

    onPress = facilities => this.setState({ facilities })


    render() {
        let selectedButton = this.state.facilities.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.facilities[0].label;

        return (
            <View>
                <ScrollView style={{ marginHorizontal: 10, marginVertical: 10, padding: 40}}>
                    <Text style={styles.title}>Tipe Kost</Text>
                    <View style={styles.container}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemPosition) =>
                                this.setState({ language: itemValue, choosenIndex: itemPosition })}
                        >
                            <Picker.Item label="Cowok" value="cowok" />
                            <Picker.Item label="Cewek" value="cewek" />
                            <Picker.Item label="Campur" value="campur" />
                        </Picker>
                    </View>

                    <Text style={styles.title}>Jangka Waktu</Text>
                    <View style={styles.container}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemPosition) =>
                                this.setState({ language: itemValue, choosenIndex: itemPosition })}
                        >
                            <Picker.Item label="Harian" value="harian" />
                            <Picker.Item label="Mingguan" value="mingguan" />
                            <Picker.Item label="Bulanan" value="bulanan" />
                            <Picker.Item label="Tahunan" value="tahunan" />
                        </Picker>
                    </View>

                    <Text style={styles.title}>Kisaran Harga</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput underlineColorAndroid='black' style={{ width: 160, fontSize: 12 }} placeholder='Min. Anggaran' />
                        <Text style={{ paddingTop: 15, color: 'grey' }}>--  </Text>
                        <TextInput underlineColorAndroid='black' style={{ width: 160, fontSize: 12 }} placeholder='Maks. Anggaran' />
                    </View>
                    <View style={{ marginBottom: 190, marginRight: 200 }}>
                        {/* <RadioGroup style={{color: 'green'}} radioButtons={this.state.facilities} onPress={this.onPress} /> */}
                    </View>
                </ScrollView>
                <View style={{ flexDirection: 'row', bottom: 0, borderTopWidth: 1, position: 'absolute', borderColor: '#b2bec3', justifyContent: 'center', width: 400, marginBottom:1}}>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{alignSelf: 'center', color: 'black', fontSize: 20, marginHorizontal: 20, marginRight: 120, color: 'gray'}}>RESET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{alignSelf: 'center', color: 'black', fontSize: 20, color: 'green'}}>CARI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    facility: {
        borderWidth: 1,
        borderColor: '#b2bec3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 25,
    },
    reset: {
        width: 160,
        alignItems: 'center',
        borderColor: '#b2bec3',
        alignSelf: 'center'
    },
    title: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 15
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerStyle: {
        width: "80%",
        color: '#344953',
        justifyContent: 'center',
    }
})