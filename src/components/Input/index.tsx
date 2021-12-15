import React from 'react';
import { TextInputProps, View } from 'react-native';
import { Container, InputContent } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  value: string;
}

export function Input({ value, ...rest }: InputProps) {
  const theme = useTheme();

  return (
    <Container>
      <InputContent
        {...rest}
        value={value}
        placeholderTextColor={theme.colors.text_label}
      />
    </Container>
  );
}
