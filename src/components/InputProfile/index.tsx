import React from 'react';
import { useTheme } from 'styled-components';

import { InputProps } from '@models/InputProps';
import { Container, InputContent, Label, LabelContainer } from './styles';

export function InputProfile({
  value,
  placeholder,
  editable,
  onChangeText,
  keyboardType,
  secureTextEntry
}: InputProps) {
  const theme = useTheme();

  return (
    <Container editable={editable}>
      <LabelContainer>
        <Label editable={editable}>{placeholder}</Label>
      </LabelContainer>
      <InputContent
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        placeholderTextColor={theme.colors.text_label}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
}
