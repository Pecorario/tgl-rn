import React from 'react';

import { FormTypes } from '@components/FormTypes';

import { Container, Content } from './styles';

export function AddType() {
  return (
    <Container>
      <Content>
        <FormTypes title="ADD A NEW GAME" typeForm="add" />
      </Content>
    </Container>
  );
}
