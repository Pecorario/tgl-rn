import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, TextView, Text } from './styles';

interface AuthButtonProps {
  children: React.ReactNode;
  text: string;
  onPress: () => void;
}
export function AuthButton({ children, text, onPress }: AuthButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <Container>
        <TextView>
          <Text>{text}</Text>
          {children}
        </TextView>
      </Container>
    </TouchableOpacity>
  );
}
