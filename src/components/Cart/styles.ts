import styled from 'styled-components/native';

export const Background = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.5);
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 80%;
  height: 60%;
  border-radius: 10px;
  elevation: 8;
  justify-content: space-between;
`;

export const Content = styled.TouchableOpacity`
  padding: 8% 8% 2% 5%;
  justify-content: space-between;
`;

export const TotalPrice = styled.View`
  flex-direction: row;
  margin-bottom: 4%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
  font-size: 22px;
`;

export const TitleLight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_title};
  font-size: 22px;
`;

export const List = styled.FlatList`
  margin-vertical: 5%;
  max-height: 70%;
`;

export const SaveContainer = styled.View`
  background: ${({ theme }) => theme.colors.background_tertiary};
  border-top-color: #e2e2e2;
  border-top-width: 1px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 12%;
  align-items: center;
  justify-content: center;
`;
