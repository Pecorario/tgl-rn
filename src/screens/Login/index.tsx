import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';
import { Link, TextLink } from './styles';

export function Login({ navigation }: RouteProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSend = () => {
    console.log(email, password);
    navigation.navigate('Logged');
  };

  const onBack = () => {
    console.log('Back');
    navigation.navigate('Registration');
  };

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
