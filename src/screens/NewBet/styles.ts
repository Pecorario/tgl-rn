import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 5%;
  padding-bottom: 0;
  background: ${({ theme }) => theme.colors.background_primary};
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4%;
`;

export const TitleStrong = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
  font-size: 22px;
`;

export const TitleLight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italic};
  color: ${({ theme }) => theme.colors.text_title};
  font-size: 22px;
`;

export const TitleGame = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_normal};
  font-size: 16px;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const DetailsContainer = styled.View`
  margin-top: 2%;
`;

export const TextGame = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italic};
  color: ${({ theme }) => theme.colors.text_normal};
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2% 0;
`;

export const List = styled.FlatList`
  margin-bottom: 8%;
  flex: 1;
`;
