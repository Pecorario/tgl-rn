import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5%;
  border-bottom-color: ${({ theme }) => theme.colors.mark};
  border-bottom-width: 2px;
  position: relative;
`;

export const InputContent = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
`;

export const Warning = styled.Text`
  position: absolute;
  bottom: 5px;
  left: 5%;
  color: red;
  font-size: 12px;
`;
