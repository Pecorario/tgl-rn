import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, TextView, Text } from './styles';
import { useTheme } from 'styled-components';

interface AuthButtonProps {
  text: string;
  type: 'primary' | 'secondary' | 'tertiary';
  onPress: () => void;
}

export function AuthButton({ text, onPress, type }: AuthButtonProps) {
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
              <Text type={type}>{text}</Text>
            </>
          ) : (
            <>
              <Text type={type}>{text}</Text>
              <Ionicons name="arrow-forward" size={24} color={color} />
            </>
          )}
        </TextView>
      </Container>
    </TouchableOpacity>
  );
}
