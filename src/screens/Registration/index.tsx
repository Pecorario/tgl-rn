import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { createUser } from '@store/auth-actions';
import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';

export function Registration({ navigation }: RouteProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const resetData = () => {
    setEmail('');
    setPassword('');
    setName('');
    navigation.navigate('Login');
  };

  const onSend = () => {
    dispatch(createUser({ email, password, name }));
    resetData();
  };

  const onBack = () => {
    resetData();
  };

  return (
    <AuthScreens
      type="tertiary"
      onPressInside={onSend}
      onPressOutside={onBack}
      textButtonInside="Register"
      textButtonOutside="Back"
    >
      <Input
        placeholder="Name"
        onChangeText={setName}
        value={name}
        keyboardType="default"
      />
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
    </AuthScreens>
  );
}
