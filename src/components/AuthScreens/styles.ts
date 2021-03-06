import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
  height: 92%;
  align-items: center;
  justify-content: center;
`;

export const TitleContent = styled.View`
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
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 80%;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 5%;
`;

export const Warning = styled.Text`
  margin-top: 2%;
  color: red;
`;

export const Footer = styled.View`
  padding: 5%;
`;

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_title};
  font-size: 12px;
  text-align: center;
`;
