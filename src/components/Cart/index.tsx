import React from 'react';
import { Modal } from 'react-native';
import { AuthButton } from '@components/AuthButton';
import { CartBet } from '@components/CartBet';

import { CartProps } from '@models/UIProps';
import {
  Container,
  Background,
  Title,
  Content,
  List,
  TitleLight,
  TotalPrice,
  SaveContainer
} from './styles';

const DATA = [
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Megasena',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  }
];

export function Cart({ visible = false, onOpen, onClose, onSave }: CartProps) {
  const renderItem = ({ item }: any) => (
    <CartBet
      numbers={item.numbers}
      price={item.price}
      title={item.title}
      color={item.color}
    />
  );
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Background onPress={onClose} activeOpacity={1}>
        <Container>
          <Content onPress={onOpen} activeOpacity={1}>
            <Title>CART</Title>
            <List
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.id}
            />
            <TotalPrice>
              <Title>CART </Title>
              <TitleLight>TOTAL: R$7,00</TitleLight>
            </TotalPrice>
          </Content>
          <SaveContainer>
            <AuthButton type="quaternary" title="Save" onPress={onSave} />
          </SaveContainer>
        </Container>
      </Background>
    </Modal>
  );
}
