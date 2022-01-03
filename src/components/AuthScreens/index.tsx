import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import { AuthButton } from '@components/AuthButton';

import { AuthScreensProps } from '@models/UIProps';
import {
  Container,
  Content,
  TitleContent,
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
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <TitleContent>
            <PreTitle>The Greatest App</PreTitle>
            <Separator>
              <SeparatorText>for</SeparatorText>
            </Separator>
            <Title>LOTTERY</Title>
          </TitleContent>
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
        </Content>
      </TouchableWithoutFeedback>
      <Footer>
        <FooterText>Copyright {year} Luby Software</FooterText>
      </Footer>
    </Container>
  );
}
