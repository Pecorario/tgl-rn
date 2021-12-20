import styled from 'styled-components/native';

interface ColorProps {
  color: string;
}

export const Container = styled.View<ColorProps>`
  border-radius: 100px;
  border-width: 2px;
  border-color: ${props => props.color};
  padding: 1% 0;
  justify-content: center;
  margin: 3%;
`;

export const Text = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.italicBold};
  color: ${props => props.color};
  text-align: center;
`;
