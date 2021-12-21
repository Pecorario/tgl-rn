import styled from 'styled-components/native';
import { ButtonProps } from '@models/ButtonProps';

export const Container = styled.View<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: -10px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  left: -30px;
  background: ${props =>
    props.active ? props.theme.colors.btn_primary : props.theme.colors.primary};
  elevation: 6;
`;
