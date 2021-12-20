import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5%;
  background: #f7f7f7;
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
  margin-bottom: 20%;
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2% 0;
`;
