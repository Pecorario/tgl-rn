import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ButtonProps } from '@interfaces/ButtonProps';
import { Container, Text } from './styles';

export function GameButton({
  title,
  color,
  onPress,
  active = false
}: ButtonProps) {
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
