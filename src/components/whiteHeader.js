import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Icon,  Header, Left, Body, Right, Button, Thumbnail, Title, Text } from 'native-base';

export default class WhiteHeader extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    {this.props.button}
                </Left>
                <Body>
                    {this.props.title}
                </Body>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
    }
})