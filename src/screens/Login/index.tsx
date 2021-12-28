import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';
import { Link, TextLink } from './styles';
import { sendLogin } from '@store/auth-actions';
import { authActions } from '@store/auth-slice';

export function Login({ navigation }: RouteProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.auth.user);
  const message = useSelector((state: RootStateOrAny) => state.auth.message);

  useEffect(() => {
    dispatch(authActions.removeMessage());
  }, []);

  const onSend = () => {
    if (email.trim() === '' || password.trim() === '') {
      dispatch(
        authActions.addMessage({
          message: 'Todos os campos devem ser preenchidos.'
        })
      );
    } else {
      setEmail('');
      setPassword('');
      dispatch(sendLogin({ email, password }));
    }
  };

  const emailChangeHandler = (text: string) => {
    setEmail(text);
    dispatch(authActions.removeMessage());
  };

  const passwordChangeHandler = (text: string) => {
    setPassword(text);
    dispatch(authActions.removeMessage());
  };

  const toRegistration = () => {
    navigation.navigate('Registration');
  };

  useEffect(() => {
    if (user !== null) {
      navigation.navigate('Logged');
    }
  }, [user]);

  return (
    <AuthScreens
      type="secondary"
      onPressInside={onSend}
      onPressOutside={toRegistration}
      textButtonInside="Log In"
      textButtonOutside="Sign Up"
      message={message}
    >
      <Input
        placeholder="Email"
        onChangeText={emailChangeHandler}
        value={email}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onChangeText={passwordChangeHandler}
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
