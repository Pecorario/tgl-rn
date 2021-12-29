import React from 'react';
import { TrashButton } from '@components/TrashButton';

import { BetProps } from '@models/UIProps';
import {
  Container,
  Numbers,
  Price,
  Name,
  Marker,
  Content,
  TitleAndPrice
} from './styles';
import { useDispatch } from 'react-redux';
import { getMoneyInReal } from '@helpers/utils';
import { gameActions } from '@store/game-slice';

export const CartBet = ({ price, title, numbers, color, id }: BetProps) => {
  const dispatch = useDispatch();
  const formatPrice = getMoneyInReal(price);
  const formatNumbers = numbers.toString().replace(/,/g, ', ');

  const deleteItem = () => {
    dispatch(gameActions.removeItemOnCart(id));
  };
  return (
    <Container>
      <TrashButton onPress={deleteItem} />
      <Marker color={color} />
      <Content>
        <Numbers>{formatNumbers}</Numbers>
        <TitleAndPrice>
          <Name color={color}>{title}</Name>
          <Price>{formatPrice}</Price>
        </TitleAndPrice>
      </Content>
    </Container>
  );
};
