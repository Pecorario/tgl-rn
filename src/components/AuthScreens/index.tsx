import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import { AuthButton } from '@components/index';

import { AuthScreensProps } from '@models/UIProps';
import {
  Container,
  TitleContainer,
  Title,
  PreTitle,
  Separator,
  SeparatorText,
  Box,
  Footer,
  FooterText,
  Warning
} from './styles';

export function AuthScreens({
  children,
  type,
  textButtonInside,
  textButtonOutside,
  onPressInside,
  onPressOutside,
  message
}: AuthScreensProps) {
  const year = new Date().getFullYear();

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
            {children}
            <AuthButton
              onPress={onPressInside}
              title={textButtonInside}
              type="primary"
            />
          </Box>
          {message !== '' && <Warning>{message}</Warning>}
          <AuthButton
            onPress={onPressOutside}
            title={textButtonOutside}
            type={type}
          />
          <Footer>
            <FooterText>Copyright {year} Luby Software</FooterText>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
