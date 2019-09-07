import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

import WhiteHeader from '../components/whiteHeader'

export default class Wishlist extends Component {
    render() {
        return (
        <Container>
            <WhiteHeader 
                    title={<Title>Wishlist</Title>} 
                />
        </Container>
        );
    }
}