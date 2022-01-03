import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getToken, updatePassword } from '@store/auth-actions';
import { authActions } from '@store/auth-slice';

import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';

export function ForgotPassword({ navigation }: RouteProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasToken, setHasToken] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(
    (state: RootStateOrAny) => state.auth.tokenPassword
  );
  const messageRdx = useSelector((state: RootStateOrAny) => state.auth.message);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token !== '') {
      setHasToken(true);
    } else {
      setHasToken(false);
      {
        messageRdx !== '' && setMessage(messageRdx);
      }
    }
  }, [token]);

  const onSend = () => {
    if (!hasToken) {
      let regex_validation =
        /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

      if (email.trim().length > 0 && regex_validation.test(email)) {
        setMessage('');
        dispatch(getToken({ email }));
      } else {
        setMessage('Email inválido.');
      }
    } else {
      dispatch(updatePassword({ token, password }));
      navigation.navigate('Login');
    }
  };

  const onBack = () => {
    if (!hasToken) {
      navigation.navigate('Login');
    } else {
      dispatch(authActions.removeToken());
    }
  };

  return (
    <AuthScreens
      type="tertiary"
      onPressInside={onSend}
      onPressOutside={onBack}
      textButtonInside="Send"
      textButtonOutside="Back"
    >
      {!hasToken ? (
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          message={message}
          autoCapitalize="none"
        />
      ) : (
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
        />
      )}
    </AuthScreens>
  );
}
