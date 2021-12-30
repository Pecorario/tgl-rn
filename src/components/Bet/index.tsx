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
import { getMoneyInReal } from '@helpers/utils';

export const Bet = ({ date, price, title, numbers, color }: BetProps) => {
  const formatNumbers = numbers.toString().replace(/,/g, ', ');
  const formatPrice = getMoneyInReal(price);
  const auxDate = date?.match(/\d\d\d\d\-\d\d\-\d\d/)?.toString();
  const year = auxDate?.slice(0, 4);
  const month = auxDate?.slice(5, 7);
  const day = auxDate?.slice(8, 10);

  const formatDate = `${day}/${month}/${year}`;
  return (
    <Container>
      <Marker color={color} />
      <Content>
        <Numbers>{formatNumbers}</Numbers>
        <DateAndPrice>
          {formatDate} - {formatPrice}
        </DateAndPrice>
        <Name color={color}>{title}</Name>
      </Content>
    </Container>
  );
};
