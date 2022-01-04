import React from 'react';
import { useTheme } from 'styled-components';

import { InputProps } from '@models/InputProps';
import { Container, InputContent, Warning } from './styles';

export function Input({
  value,
  placeholder,
  onChangeText,
  message,
  ...rest
}: InputProps) {
  const theme = useTheme();

  return (
    <Container>
      <InputContent
        {...rest}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={theme.colors.text_label}
      />
      {message !== '' && <Warning>{message}</Warning>}
    </Container>
  );
}
