import styled from 'styled-components/native';
import { StyledProps } from '@models/UIProps';

export const Container = styled.View`
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-bottom: 4%;
  width: 100%;
`;

export const Marker = styled.View<StyledProps>`
  position: absolute;
  height: 100%;
  width: 5px;
  border-radius: 100px;
  background: ${props => props.color};
  left: 12%;
`;

export const Content = styled.View`
  padding: 3% 3% 3% 8%;
`;

export const Numbers = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_normal};
  font-size: 14px;
  margin-bottom: 1%;
`;

export const TitleAndPrice = styled.View`
  flex-direction: row;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_normal};
  margin-bottom: 1%;
  font-size: 15px;
`;

export const Name = styled.Text<StyledProps>`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${props => props.color};
  font-size: 15px;
  margin-right: 3%;
`;
