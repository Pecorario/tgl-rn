import React from 'react';
import Modal from 'react-native-modal';
import { CartProps } from '@models/UIProps';
import { Container } from './styles';
import { FormTypes } from '@components/FormTypes';
import { TypeProps } from '@models/GameProps';

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
