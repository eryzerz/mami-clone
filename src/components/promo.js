import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import Slideshow from 'react-native-image-slider-show';

class Slide extends Component {
    constructor() {
        super();
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                // title: 'Title 1',
                // caption: 'Caption 1',
                url: 'https://static.mamikos.com/uploads/cache/data/user/2019-02-06/tYYKBgjd-360x480.jpg',
                }, {
                url: 'https://static.mamikos.com/uploads/cache/data/user/2019-05-10/A82cx34O-360x480.jpg',
                }, {
                url: 'https://static.mamikos.com/uploads/cache/data/user/2019-08-02/T71F3KDd-360x480.jpg',
                },
            ],
        };
    }
    componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
          }, 3000)
        });
      }
      componentWillUnmount() {
        clearInterval(this.state.interval);
      }

    render() { 
        return (  <View style={[styles.itemBaris]}>
            <Text style={styles.text}>Promo</Text>
            <View style={{ padding: 0, borderRadius: 5 }}>
              <Slideshow
                height={155}
                overlay={false}
                arrowSize={2}
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged=
                {position => this.setState({ position })}
                containerStyle={{ resizeMode: 'cover'}}
              />
            </View>
          </View> );
    }
}
 
export default Slide;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 5,
      backgroundColor: '#f0f0f0'
    },
    cardContainer: {
      marginVertical: 5
    },
    itemBaris: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        paddingVertical: 5
    },
    text :{
      color: '#474747', 
      fontWeight: 'bold',
       paddingVertical: 20, 
       fontSize: 19,
       paddingLeft:20
    }
})