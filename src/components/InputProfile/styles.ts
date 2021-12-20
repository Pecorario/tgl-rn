import theme from '@global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 2%;
  border-color: ${({ theme }) => theme.colors.text_label};
  border-width: 2px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 8%;
`;

export const InputContent = styled.TextInput`
  margin-left: 3%;
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_title};
`;

export const LabelContainer = styled.View`
  position: absolute;
  top: -13px;
  background: #f7f7f7;
  padding: 2%;
  left: 5%;
`;

export const Label = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${({ theme }) => theme.colors.text_label};
`;
