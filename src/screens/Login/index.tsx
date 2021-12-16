import React, { useState } from 'react';
import { AuthScreens } from '@components/AuthScreens';
import { Input } from '@components/Input';
import { Link, TextLink } from './styles';
import { TouchableOpacity } from 'react-native';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSend = () => {
    console.log(email, password);
  };

  const onBack = () => {
    console.log('Back');
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
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <Link>
          <TextLink>I forgot my password</TextLink>
        </Link>
      </TouchableOpacity>
    </AuthScreens>
  );
}
