import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { DefaultButton } from '@interfaces/ButtonProps';
import { Container, Text } from './styles';

export function Button({ type, title, color, onPress }: DefaultButton) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container type={type} color={color}>
        {type === 'edit' && (
          <FontAwesome5 name="user-edit" size={16} color="#FFF" />
        )}
        {type === 'save' && (
          <MaterialCommunityIcons
            name="content-save-edit"
            size={20}
            color="#FFF"
          />
        )}
        <Text type={type} color={color}>
          {title}
        </Text>
      </Container>
    </TouchableOpacity>
  );
}
