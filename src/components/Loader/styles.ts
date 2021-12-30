import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #00000040;
`;

export const Wrapper = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10%;
  align-items: center;
  justify-content: space-around;
  elevation: 6;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_label};
  font-size: 14px;
  margin-top: 5%;
`;
