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

export const CartBet = ({ price, title, numbers, color }: BetProps) => {
  return (
    <Container>
      <TrashButton onPress={() => alert('Delete!')} />
      <Marker color={color} />
      <Content>
        <Numbers>{numbers}</Numbers>
        <TitleAndPrice>
          <Name color={color}>{title}</Name>
          <Price>{price}</Price>
        </TitleAndPrice>
      </Content>
    </Container>
  );
};
