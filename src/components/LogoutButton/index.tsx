import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { ButtonHeaderProps } from '@models/ButtonProps';
import { Container } from './styles';
import { authActions } from '@store/auth-slice';
import { RouteProps } from '@models/RoutesProps';

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
