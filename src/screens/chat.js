import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

import WhiteHeader from '../components/whiteHeader'

export default class Chat extends Component {
    render() {
        return (
            <Container>
                <WhiteHeader 
                    title={<Title>Chat</Title>} 
                />
            </Container>
        );
    }
}