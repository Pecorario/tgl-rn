import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  TitleContainer,
  Title,
  PreTitle,
  Separator,
  SeparatorText,
  Box,
  Footer,
  FooterText
} from './styles';
import { AuthButton } from '@components/AuthButton';

interface AuthScreensProps {
  children: React.ReactNode;
  type: 'secondary' | 'tertiary';
  textButtonInside: string;
  textButtonOutside: string;
  onPressInside: () => void;
  onPressOutside: () => void;
}

export function AuthScreens({
  children,
  type,
  textButtonInside,
  textButtonOutside,
  onPressInside,
  onPressOutside
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
              text={textButtonInside}
              type="primary"
            />
          </Box>
          <AuthButton
            onPress={onPressOutside}
            text={textButtonOutside}
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
