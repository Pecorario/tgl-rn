import React from 'react';
import { useTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { ButtonProps } from '@models/ButtonProps';

export function TrashButton({ onPress }: ButtonProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <EvilIcons name="trash" size={26} color={theme.colors.btn_secondary} />
    </TouchableOpacity>
  );
}
