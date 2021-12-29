import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 80%;
  max-height: 60%;
  border-radius: 10px;
  elevation: 8;
  justify-content: space-between;
`;

export const Content = styled.View`
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

export const SaveContainer = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.background_tertiary};
  border-top-color: #e2e2e2;
  border-top-width: 1px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

export const SaveText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.btn_primary};
  margin-right: 2%;
`;

export const EmptyCart = styled.Text`
  color: red;
  margin: 5% 0;
`;
