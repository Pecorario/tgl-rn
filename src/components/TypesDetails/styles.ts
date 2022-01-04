import styled from 'styled-components/native';
import { StyledProps } from '@models/UIProps';

export const Container = styled.View``;

export const Content = styled.View`
  padding-left: 2%;
`;

export const Title = styled.Text<StyledProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${props => props.color};
  font-size: 18px;
`;

export const LineDescription = styled.View`
  margin-bottom: 1%;
`;

export const Line = styled.View`
  flex-direction: row;
  margin-bottom: 1%;
`;

export const TitleCategory = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
  font-size: 16px;
  margin-right: 1%;
`;

export const Details = styled.Text<StyledProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${props =>
    props.color ? props.color : props.theme.colors.text_label};

  font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
  padding: 5%;
  width: 20%;
  margin-horizontal: 5%;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  margin: 0 auto;
`;
