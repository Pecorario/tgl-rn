import React from 'react';

import { CartButton } from '@components/CartButton';
import { LogoutButton } from '@components/LogoutButton';

import { ButtonHeaderProps } from '@models/ButtonProps';
import { Container } from './styles';

export function HeaderButtons({ color, navigation }: ButtonHeaderProps) {
  return (
    <Container>
      <CartButton color={color} />
      <LogoutButton color={color} navigation={navigation} />
    </Container>
  );
}
