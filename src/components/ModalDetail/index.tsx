import React from 'react';
import Modal from 'react-native-modal';

import { FormTypes } from '@components/FormTypes';

import { TypeProps } from '@models/GameProps';
import { Container } from './styles';

interface ModalProps {
  data?: TypeProps;
  visible: boolean;
  onClose: () => {} | any;
}

export function ModalDetail({ visible, onClose, data }: ModalProps) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Container>
        <FormTypes
          title="Editar jogo"
          typeForm="edit"
          data={data}
          onCancel={onClose}
        />
      </Container>
    </Modal>
  );
}
