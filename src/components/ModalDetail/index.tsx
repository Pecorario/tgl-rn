import React from 'react';
import Modal from 'react-native-modal';

import { FormTypes } from '@components/FormTypes';

import { ModalProps } from '@models/UIProps';
import { Container } from './styles';

export function ModalDetail({ visible, onClose, data }: ModalProps) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Container>
        <FormTypes
          title="EDIT GAME"
          typeForm="edit"
          data={data}
          onCancel={onClose}
        />
      </Container>
    </Modal>
  );
}
