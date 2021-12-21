import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { ButtonProps } from '@models/ButtonProps';
import { Container } from './styles';

export function CartButton({ color }: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => alert('Open cart modal!')}>
      <Container>
        <FontAwesome5 name="cart-plus" size={22} color={color} />
      </Container>
    </TouchableOpacity>
  );
}
