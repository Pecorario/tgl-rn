import styled from 'styled-components/native';

interface ColorProps {
  color?: string;
  selected?: boolean;
}

export const Container = styled.View<ColorProps>`
  background: ${props =>
    props.selected ? props.color : props.theme.colors.tertiary};
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  justify-content: center;
  align-items: center;
  margin: 4% 1%;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  text-align: center;
`;
