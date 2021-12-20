import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export function LogoutButton({ color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <MaterialIcons name="logout" size={26} color={color} />
      </Container>
    </TouchableOpacity>
  );
}
