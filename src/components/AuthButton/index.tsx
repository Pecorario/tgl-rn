import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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
              <MaterialIcons name="navigate-next" size={24} color={color} />
              <Text type={type}>{text}</Text>
            </>
          ) : (
            <>
              <Text type={type}>{text}</Text>
              <MaterialIcons name="navigate-next" size={24} color={color} />
            </>
          )}
        </TextView>
      </Container>
    </TouchableOpacity>
  );
}
