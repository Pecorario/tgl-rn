import React from 'react';
import {
  Container,
  Numbers,
  DateAndPrice,
  Name,
  Marker,
  Content
} from './styles';

export const ListGame = ({ date, price, title, numbers, color }: any) => {
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