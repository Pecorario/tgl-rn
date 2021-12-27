import React, { useState } from 'react';
import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';

export function ForgotPassword({ navigation }: RouteProps) {
  const [email, setEmail] = useState('');

  const onSend = () => {
    console.log(email);
    navigation.navigate('Login');
  };

  const onBack = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthScreens
      type="tertiary"
      onPressInside={onSend}
      onPressOutside={onBack}
      textButtonInside="Send Link"
      textButtonOutside="Back"
    >
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
    </AuthScreens>
  );
}
