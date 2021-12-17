import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
  font-size: 24px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italic};
  color: ${({ theme }) => theme.colors.text_normal};
`;

export const List = styled.FlatList`
  margin-top: 2%;
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 2% 0;
`;
