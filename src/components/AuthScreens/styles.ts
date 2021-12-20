import theme from '@global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
`;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const PreTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text_title};
  text-align: center;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 80px;
  border-radius: 100px;
  margin: 1% 0;
`;

export const SeparatorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin: 4% 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text_title};
  text-align: center;
`;

export const Box = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};
  width: 80%;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 5%;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 2%;
`;

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_title};
`;
