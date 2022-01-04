import styled from 'styled-components/native';
import { StyledProps } from '@models/UIProps';

export const Container = styled.View`
  position: relative;
  margin-bottom: 4%;
`;

export const Marker = styled.View<StyledProps>`
  position: absolute;
  height: 100%;
  width: 5px;
  border-radius: 100px;
  background: ${props => props.color};
`;

export const Content = styled.View`
  padding: 1% 1% 1% 5%;
`;

export const Numbers = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_normal};
  font-size: 16px;
  margin-bottom: 1%;
`;

export const DateAndPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_normal};
  margin-bottom: 1%;
`;

export const Name = styled.Text<StyledProps>`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${props => props.color};
  font-size: 16px;
`;
