import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputContent, Label, LabelContainer } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  value: string;
  label: string;
}

export function InputProfile({ value, label, ...rest }: InputProps) {
  const theme = useTheme();

  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <InputContent
        {...rest}
        value={value}
        placeholderTextColor={theme.colors.text_label}
      />
    </Container>
  );
}
