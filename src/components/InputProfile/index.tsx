import React from 'react';
import { useTheme } from 'styled-components';

import { InputProps } from '@models/InputProps';
import { Container, InputContent, Label, LabelContainer } from './styles';

export function InputProfile({
  value,
  label,
  editable,
  onChangeText,
  keyboardType,
  isFlexRow,
  secureTextEntry,
  ...rest
}: InputProps) {
  const theme = useTheme();

  return (
    <Container editable={editable} isFlexRow={isFlexRow}>
      <LabelContainer>
        <Label editable={editable}>{label}</Label>
      </LabelContainer>
      <InputContent
        {...rest}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        placeholderTextColor={theme.colors.text_label}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </Container>
  );
}
