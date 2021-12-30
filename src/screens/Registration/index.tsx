import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '@store/auth-actions';
import { AuthScreens, Input } from '@components/index';

import { RouteProps } from '@models/RoutesProps';

export function Registration({ navigation }: RouteProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const [messageName, setMessageName] = useState('');
  const dispatch = useDispatch();

  const resetData = () => {
    setEmail('');
    setPassword('');
    setName('');
    navigation.navigate('Login');
  };

  const validateData = () => {
    let regex_validation =
      /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    if (email.trim().length > 0 && regex_validation.test(email)) {
      setMessageEmail('');
      setEmailIsValid(true);
    } else {
      setMessageEmail('Email inválido.');
      setEmailIsValid(false);
    }
    if (password.trim().length > 5) {
      setMessagePassword('');
      setPasswordIsValid(true);
    } else {
      setMessagePassword('Senha precisa ter pelo menos 6 caracteres.');
      setPasswordIsValid(false);
    }
    if (name.trim().length > 0) {
      setMessageName('');
      setNameIsValid(true);
    } else {
      setMessageName('Nome não pode ser vazio.');
      setNameIsValid(false);
    }
  };

  const onSend = () => {
    if (emailIsValid && passwordIsValid && nameIsValid) {
      dispatch(createUser({ email, password, name }));
      resetData();
    } else {
      validateData();
    }
  };

  const onBack = () => {
    resetData();
  };

  const emailChangeHandler = (text: string) => {
    setEmail(text);
    setMessageEmail('');
  };

  const nameChangeHandler = (text: string) => {
    setName(text);
    setMessageName('');
  };

  const passwordChangeHandler = (text: string) => {
    setPassword(text);
    setMessagePassword('');
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
        onChangeText={nameChangeHandler}
        value={name}
        keyboardType="default"
        message={messageName}
        autoCapitalize="words"
      />
      <Input
        placeholder="Email"
        onChangeText={emailChangeHandler}
        value={email}
        keyboardType="email-address"
        message={messageEmail}
        autoCapitalize="none"
      />
      <Input
        placeholder="Password"
        onChangeText={passwordChangeHandler}
        value={password}
        secureTextEntry={true}
        message={messagePassword}
        autoCapitalize="none"
      />
    </AuthScreens>
  );
}
