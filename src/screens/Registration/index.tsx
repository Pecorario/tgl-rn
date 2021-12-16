import React, { useState } from 'react';
import { AuthScreens } from '@components/AuthScreens';
import { Input } from '@components/Input';

export function Registration({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSend = () => {
    console.log(name, email, password);
    navigation.navigate('Login');
  };

  const onBack = () => {
    console.log('Back');
    navigation.navigate('Login');
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
