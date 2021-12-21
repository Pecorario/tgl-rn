import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Text } from './styles';

export function GameButton({ title, color, onPress, active = false }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container color={color} active={active}>
        <Text active={active} color={color}>
          {title}
        </Text>
      </Container>
    </TouchableOpacity>
  );
}
