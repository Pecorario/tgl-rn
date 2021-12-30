import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background_primary};
  align-items: center;
  padding: 10% 5%;
`;
