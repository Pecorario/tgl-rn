import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
  text-align: center;
  font-size: 20px;
  margin-bottom: 5%;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
