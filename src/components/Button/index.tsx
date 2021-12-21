import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Text } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ButtonProps {
  type: 'edit' | 'save' | 'default';
  title: string;
  color: string;
  onPress: () => void;
}

export function Button({ type, title, color, onPress }: ButtonProps) {
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
