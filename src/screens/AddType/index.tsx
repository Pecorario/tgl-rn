import React from 'react';
import { Container } from './styles';
import { FormTypes } from '@components/FormTypes';

export function AddType() {
  return (
    <Container>
      <FormTypes title="Adicione um novo jogo" typeForm="add" />
    </Container>
  );
}
