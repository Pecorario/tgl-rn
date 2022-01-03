import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { AuthButtonProps } from '@models/ButtonProps';
import { Container, TextView, Text } from './styles';

export function AuthButton({ title, onPress, type }: AuthButtonProps) {
  const theme = useTheme();

  const color =
    type === 'primary' ? theme.colors.primary : theme.colors.text_title;

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <Container type={type}>
        <TextView>
          {type === 'tertiary' ? (
            <>
              <Ionicons name="arrow-back" size={24} color={color} />
              <Text type={type}>{title}</Text>
            </>
          ) : (
            <>
              <Text type={type}>{title}</Text>
              <Ionicons name="arrow-forward" size={24} color={color} />
            </>
          )}
        </TextView>
      </Container>
    </TouchableOpacity>
  );
}
