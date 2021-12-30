import React, { Component } from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { Container, Wrapper, Text } from './styles';

export function Loader(props: any) {
  const { loading } = props;

  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <Container>
        <Wrapper>
          <ActivityIndicator
            animating={loading}
            color="#00000040"
            size="large"
          />
          <Text>Loading</Text>
        </Wrapper>
      </Container>
    </Modal>
  );
}
