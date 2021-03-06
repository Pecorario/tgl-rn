import React from 'react';
import Modal from 'react-native-modal';
import { useTheme } from 'styled-components';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { getMoneyInReal } from '@shared/helpers/utils';

import { CartBet } from '@components/CartBet';

import { CartProps } from '@models/UIProps';
import {
  Container,
  Title,
  Content,
  List,
  TitleLight,
  TotalPrice,
  SaveContainer,
  EmptyCart,
  SaveText
} from './styles';

export function Cart({ visible = false, onClose, onSave }: CartProps) {
  const theme = useTheme();
  const games = useSelector((state: RootStateOrAny) => state.game.games);
  const totalPrice = useSelector(
    (state: RootStateOrAny) => state.game.totalPrice
  );
  const formatPrice = getMoneyInReal(totalPrice);
  const differentColor = theme.colors.btn_primary;

  const renderItem = ({ item }: any) => (
    <CartBet
      id={item.id}
      numbers={item.numbers}
      price={item.price}
      title={item.name}
      color={item.color}
    />
  );
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Container>
        <Content>
          <Title>CART</Title>
          {games.length === 0 ? (
            <EmptyCart>Empty cart!</EmptyCart>
          ) : (
            <List
              data={games}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.id}
            />
          )}
          <TotalPrice>
            <Title>CART </Title>
            <TitleLight>TOTAL: {formatPrice}</TitleLight>
          </TotalPrice>
        </Content>
        <SaveContainer onPress={onSave}>
          <SaveText>Save</SaveText>
          <Ionicons name="arrow-forward" size={24} color={differentColor} />
        </SaveContainer>
      </Container>
    </Modal>
  );
}
