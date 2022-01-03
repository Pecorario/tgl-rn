import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { authActions } from '@store/auth-slice';

import { ButtonHeaderProps } from '@models/ButtonProps';
import { Container } from './styles';

export function LogoutButton({ color, navigation }: ButtonHeaderProps) {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authActions.onLogout());
    navigation?.navigate('Login');
  };
  return (
    <TouchableOpacity onPress={onLogout}>
      <Container>
        <MaterialIcons name="logout" size={26} color={color} />
      </Container>
    </TouchableOpacity>
  );
}
