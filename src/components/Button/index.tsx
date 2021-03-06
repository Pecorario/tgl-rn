import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign
} from '@expo/vector-icons';

import { DefaultButton } from '@models/ButtonProps';
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
        {type === 'cart' && (
          <AntDesign name="shoppingcart" size={18} color="#FFF" />
        )}
        <Text type={type} color={color}>
          {title}
        </Text>
      </Container>
    </TouchableOpacity>
  );
}
