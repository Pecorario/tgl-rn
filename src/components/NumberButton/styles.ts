import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.tertiary};
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  justify-content: center;
  align-items: center;
  margin: 4% 1%;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  text-align: center;
`;
