import styled from 'styled-components/native';

interface TextProps {
  type: 'primary' | 'secondary' | 'tertiary';
}

export const Container = styled.View<TextProps>`
  align-items: center;
  margin: ${props => (props.type === 'primary' ? '8%' : '4%')} 0;
`;

export const TextView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  font-size: 24px;
  color: ${props =>
    props.type === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.text_title};
  margin-right: ${props => (props.type !== 'tertiary' ? '2%' : '0')};
  margin-left: ${props => (props.type === 'tertiary' ? '3%' : '0')};
`;
