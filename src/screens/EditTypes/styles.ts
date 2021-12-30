import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};
  flex: 1;
  padding: 5%;
`;

export const Content = styled.ScrollView``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title}
  font-size: 22px;
  margin-bottom: 5%;
`;
