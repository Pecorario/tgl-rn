import styled from 'styled-components/native';
import { InputProps } from '@models/InputProps';

export const Container = styled.View<InputProps>`
  padding: 2%;
  border-color: ${props =>
    props.editable
      ? props.theme.colors.text_title
      : props.theme.colors.text_link};
  border-width: 2px;
  border-radius: 10px;
  position: relative;
  margin: 2%;
  margin-bottom: 5%;
  flex: ${props => (props.isFlexRow ? 1 : 'none')};
`;

export const InputContent = styled.TextInput<InputProps>`
  margin-left: 3%;
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${props =>
    props.editable
      ? props.theme.colors.text_title
      : props.theme.colors.text_link}; ;
`;

export const LabelContainer = styled.View`
  position: absolute;
  top: -13px;
  background: #f7f7f7;
  padding: 2%;
  left: 5%;
`;

export const Label = styled.Text<InputProps>`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${props =>
    props.editable
      ? props.theme.colors.text_title
      : props.theme.colors.text_link}; ;
`;
