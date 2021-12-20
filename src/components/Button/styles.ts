import styled from 'styled-components/native';

interface ButtonProps {
  color: string;
  type: 'edit' | 'save' | 'default';
}

export const Container = styled.View<ButtonProps>`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${props => props.color};
  padding: 1% 0;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin: 3%;
  flex-direction: row;
  background: ${props =>
    props.type === 'default' ? 'transparent' : props.color};
`;

export const Text = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${props => (props.type === 'default' ? props.color : '#FFF')};
  text-align: center;
  font-size: 16px;
  margin-left: ${props => (props.type === 'default' ? 0 : '5%')};
`;
