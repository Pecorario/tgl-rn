import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5%;
  border-bottom-color: ${({ theme }) => theme.colors.mark};
  border-bottom-width: 2px;
`;

export const InputContent = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
`;
