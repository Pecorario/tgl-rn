import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputContent, Label, LabelContainer } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  value: string;
  label: string;
  editable: boolean;
}

export function InputProfile({ value, label, editable, ...rest }: InputProps) {
  const theme = useTheme();

  return (
    <Container editable={editable}>
      <LabelContainer>
        <Label editable={editable}>{label}</Label>
      </LabelContainer>
      <InputContent
        {...rest}
        value={value}
        editable={editable}
        placeholderTextColor={theme.colors.text_label}
      />
    </Container>
  );
}
