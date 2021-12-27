import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';
import { Link, TextLink } from './styles';
import { sendLogin } from '@store/auth-actions';

export function Login({ navigation }: RouteProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.auth.user);

  const onSend = () => {
    dispatch(sendLogin({ email, password }));
  };

  const onBack = () => {
    console.log('Back');
    navigation.navigate('Registration');
  };

  useEffect(() => {
    console.log('oq recebe aqui?:', user);
    if (user !== null) {
      navigation.navigate('Logged');
    }
  }, [user]);

  return (
    <AuthScreens
      type="secondary"
      onPressInside={onSend}
      onPressOutside={onBack}
      textButtonInside="Log In"
      textButtonOutside="Sign Up"
    >
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate('Forgot Password');
        }}
      >
        <Link>
          <TextLink>I forgot my password</TextLink>
        </Link>
      </TouchableOpacity>
    </AuthScreens>
  );
}
