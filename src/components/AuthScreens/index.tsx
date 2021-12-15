import React, { useState } from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  TitleContainer,
  Title,
  PreTitle,
  Separator,
  SeparatorText,
  Box
} from './styles';
import { Input } from '@components/Input';
import { AuthButton } from '@components/AuthButton';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export function AuthScreens() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const sendForm = () => {
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <TitleContainer>
            <PreTitle>The Greatest App</PreTitle>
            <Separator>
              <SeparatorText>for</SeparatorText>
            </Separator>
            <Title>LOTTERY</Title>
          </TitleContainer>
          <Box>
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
            <AuthButton onPress={sendForm} text="Log In">
              <MaterialIcons
                name="navigate-next"
                size={24}
                color={theme.colors.primary}
              />
            </AuthButton>
          </Box>
        </Container>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
