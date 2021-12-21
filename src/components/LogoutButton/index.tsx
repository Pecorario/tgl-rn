import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonProps } from '@models/ButtonProps';
import { Container } from './styles';

export function LogoutButton({ color, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <MaterialIcons name="logout" size={26} color={color} />
      </Container>
    </TouchableOpacity>
  );
}
