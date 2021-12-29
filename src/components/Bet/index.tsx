import React from 'react';

import { BetProps } from '@models/UIProps';
import {
  Container,
  Numbers,
  DateAndPrice,
  Name,
  Marker,
  Content
} from './styles';

export const Bet = ({ date, price, title, numbers, color }: BetProps) => {
  return (
    <Container>
      <Marker color={color} />
      <Content>
        <Numbers>{numbers}</Numbers>
        <DateAndPrice>
          {date} - {price}
        </DateAndPrice>
        <Name color={color}>{title}</Name>
      </Content>
    </Container>
  );
};
