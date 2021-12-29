import React from 'react';
import { TrashButton } from '@components/TrashButton';

import { ListGameProps } from '@models/UIProps';
import {
  Container,
  Numbers,
  Price,
  Name,
  Marker,
  Content,
  TitleAndPrice
} from './styles';

export const CartCard = ({ price, title, numbers, color }: ListGameProps) => {
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
