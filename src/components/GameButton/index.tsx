import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Text } from './styles';

export function GameButton({ title, color, onPress }) {
  return (
    <TouchableOpacity>
      <Container color={color}>
        <Text color={color}>{title}</Text>
      </Container>
    </TouchableOpacity>
  );
}
