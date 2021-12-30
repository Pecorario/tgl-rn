import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';
import { Link, TextLink } from './styles';
import { sendLogin } from '@store/auth-actions';
import { authActions } from '@store/auth-slice';
import { Loader } from '@components/Loader';

export function Login({ navigation }: RouteProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector((state: RootStateOrAny) => state.auth.loading);
  const user = useSelector((state: RootStateOrAny) => state.auth.user);
  const message = useSelector((state: RootStateOrAny) => state.auth.message);

  useEffect(() => {
    dispatch(authActions.removeMessage());
  }, []);

  const onLink = () => {
    dispatch(authActions.removeMessage());
    navigation.navigate('Forgot Password');
  };

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
    dispatch(authActions.removeMessage());
    navigation.navigate('Registration');
  };

  useEffect(() => {
    if (user !== null) {
      dispatch(authActions.removeMessage());
      navigation.navigate('Logged');
    }
  }, [user]);

  return (
    <>
      <Loader loading={loading} />
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
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          onChangeText={passwordChangeHandler}
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity activeOpacity={0.6} onPress={onLink}>
          <Link>
            <TextLink>I forgot my password</TextLink>
          </Link>
        </TouchableOpacity>
      </AuthScreens>
    </>
  );
}
