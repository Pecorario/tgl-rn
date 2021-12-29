import styled from 'styled-components/native';
import { ButtonProps } from '@models/ButtonProps';

export const Container = styled.View<ButtonProps>`
  border-radius: 100px;
  border-width: 2px;
  border-color: ${props =>
    props.active ? props.theme.colors.background_primary : props.color};
  background: ${props =>
    props.active ? props.color : props.theme.colors.background_primary};
  padding: 1% 0;
  justify-content: center;
  margin: 3%;
`;

export const Text = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${props =>
    props.active ? props.theme.colors.background_primary : props.color};
  text-align: center;
`;
