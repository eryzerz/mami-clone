import React, { Component } from 'react'
import Icon from 'native-base'
import { TouchableWithoutFeedback, Button, Image, TextInput, FlatList, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { withNavigation, createMaterialTopTabNavigator } from 'react-navigation'
import axios from 'axios'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import FilterPage from './filterPage'
import DetailView from './detailView'
import Host from '../env/env'
import {getDorms} from '../store/actions'
import dorms from '../store/reducers'



class ListDorm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dorms: []
        }
    }

    componentDidMount() {
        axios.get(`${Host.host}dorms`)
            .then(res => {
                const dorms = res.data
                this.props.dispatch(getDorms(dorms))
            })
            .catch(err => alert(err))
    }

    _keyExtrractor = ( item, index ) => item.id

    render() {
        const dorms = this.props.dorms.data
        return (
            <View>
                <FlatList 
                    data={dorms}
                    keyExtractor={this._keyExtrractor}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} style={styles.card} onPress={() => this.props.navigation.navigate('DetailView', { item:item})} dataItem={item}>
                            <Image source={{uri: item.photoURL}} style={styles.image} />
                            <View style={styles.text}>
                                <Text sytle={{ flexDirection: 'row', alignContent: 'space-between'}}>
                                    <Text style={{color: 'red'}}>{item.type}  </Text> 
                                    <Text style={{color: 'green'}}> Tersisa {item.room} kamar  </Text>
                                    <Text> {item.city}</Text>
                                </Text>
                                <Text style={{ fontWeight: 'bold'}}>
                                    Rp {item.cost} /bln
                                </Text>
                                <Text>
                                    {item.name}
                                </Text>
                                <View style={styles.button}>
                                    <Text style={{ color: 'white', alignSelf: 'center'}}>Bisa Pesan</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View style={{ flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.buttonFilter}
                            onPress={() => this.props.navigation.navigate('FilterPage')}
                        >
                            <Text style={{alignSelf: 'center', color: 'green', fontSize: 20}} >Filter</Text>
                        </TouchableOpacity>
                    
                
                        <TouchableOpacity 
                            style={styles.buttonSort}
                        >
                            <Text style={{alignSelf: 'center', color: 'green', fontSize: 20}}>Sort</Text>
                        </TouchableOpacity>
                    
                    
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dorms: state.dorms
    }
}

export default connect(mapStateToProps)(ListDorm)

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor:'white',
        width: 380,
        height: 50,
        borderRadius: 20,
        borderWidth: 0,
        marginVertical: 15,
        marginHorizontal: 15,
        elevation: 7,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 20
    },
    card: { 
        width: 390, 
        padding: 0, 
        paddingBottom: 15,
        margin: 8, 
        borderRadius: 30, 
        backgroundColor: 'white', 
        elevation: 6,
        alignContent: 'center'
    },
    button: {
        backgroundColor:'green',
        width: 100,
        height: 20,
        borderRadius: 20,
        borderWidth: 0,
        alignItems: 'center',
    },
    buttonFilter: {
        paddingTop: 8,
        position: 'absolute',
        bottom: 6,
        borderColor: 'white',
        backgroundColor:'#ebf0ec',
        borderWidth: 1,
        width: 100,
        height: 50,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightColor: 'silver',
        elevation: 9,
        marginLeft:111,
        marginTop: 80
    },
    buttonSort: {
        paddingTop: 8,
        bottom: 56,
        backgroundColor:'#ebf0ec',
        borderWidth: 1,
        borderColor: 'white',
        width: 100,
        height: 50,
        borderRadius: 10,
        borderRightWidth: 1,
        elevation: 9,
        marginLeft: 210,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    image: { 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        width: 390, 
        height: 200, 
        alignSelf: 'center', 
        flex:1
    },
    text: {
        paddingTop: 15,
        flexDirection: 'column', 
        flex: 1.5, 
        paddingLeft: 2, 
        marginLeft: 20
    }
})