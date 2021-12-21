import React from 'react';

import { NumberButtonProps } from '@models/ButtonProps';
import { Container, Text } from './styles';
import { TouchableOpacity } from 'react-native';

export function NumberButton({ number, onPress }: NumberButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Text>{number}</Text>
      </Container>
    </TouchableOpacity>
  );
}
