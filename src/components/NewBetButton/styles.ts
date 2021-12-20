import styled from 'styled-components/native';

interface ActiveButton {
  active: boolean;
}

export const Container = styled.View<ActiveButton>`
  flex: 1;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: -10px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  left: -30px;
  background: ${props => (props.active ? '#27C383' : '#b5c401')};
  elevation: 6;
`;
