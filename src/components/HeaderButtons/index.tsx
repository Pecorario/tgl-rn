import React from 'react';
import { CartButton, LogoutButton } from '@components/index';

import { ButtonProps } from '@models/ButtonProps';
import { Container } from './styles';

export function HeaderButtons({ color, onPress }: ButtonProps) {
  return (
    <Container>
      <CartButton color={color} />
      <LogoutButton color={color} onPress={onPress} />
    </Container>
  );
}
