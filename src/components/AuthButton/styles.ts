import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin: 8% 0;
`;

export const TextView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
