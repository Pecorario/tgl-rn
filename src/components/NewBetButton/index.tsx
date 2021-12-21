import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ButtonProps } from '@interfaces/ButtonProps';
import { Container } from './styles';

export function NewBetButton({ onPress, active = false }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container active={active}>
        <Ionicons name="add-outline" size={32} color="#FFF" />
      </Container>
    </TouchableOpacity>
  );
}
