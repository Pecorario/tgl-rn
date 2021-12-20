import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { Ionicons } from '@expo/vector-icons';

export function NewBetButton({ onPress, active = false }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container active={active}>
        <Ionicons name="add-outline" size={32} color="#FFF" />
      </Container>
    </TouchableOpacity>
  );
}
