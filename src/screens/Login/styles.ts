import styled from 'styled-components/native';

export const Link = styled.View`
  align-items: flex-end;
  padding: 5%;
  padding-bottom: 0;
`;

export const TextLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italic};
  color: ${({ theme }) => theme.colors.text_link};
`;
