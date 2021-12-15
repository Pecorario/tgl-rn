import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  height: 100%;
  align-items: center;
  justify-content: center;
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
`;

export const SeparatorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  font-size: 18px;
  color: #fff;
  text-align: center;
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
