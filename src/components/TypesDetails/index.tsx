import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { deleteType } from '@store/auth-actions';
import { getMoneyInReal } from '@shared/helpers/utils';

import { ModalDetail } from '@components/ModalDetail';

import { TypeProps } from '@models/GameProps';
import {
  Container,
  Title,
  Line,
  TitleCategory,
  Details,
  Content,
  LineDescription,
  Button,
  ContainerButtons
} from './styles';

export function TypesDetail({
  id,
  name,
  description,
  range,
  price,
  color,
  maxNumber
}: TypeProps) {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootStateOrAny) => state.auth.user);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const onDelete = () => {
    Alert.alert('Atenção', 'Deseja realmente excluir este jogo?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', onPress: () => dispatch(deleteType({ id, token })) }
    ]);
  };

  const data: TypeProps = {
    id,
    name,
    description,
    price,
    maxNumber,
    color,
    range
  };

  return (
    <>
      <ModalDetail visible={visible} onClose={closeModal} data={data} />
      <Container>
        <Title color={color}>{name}</Title>
        <Content>
          <LineDescription>
            <TitleCategory>Descrição:</TitleCategory>
            <Details>{description}</Details>
          </LineDescription>
          <Line>
            <TitleCategory>Tamanho:</TitleCategory>
            <Details>{range}</Details>
          </Line>
          <Line>
            <TitleCategory>Número Máximo:</TitleCategory>
            <Details>{maxNumber}</Details>
          </Line>
          <Line>
            <TitleCategory>Preço:</TitleCategory>
            <Details>{getMoneyInReal(price)}</Details>
          </Line>
          <Line>
            <TitleCategory>Cor:</TitleCategory>
            <Details color={color}>{color}</Details>
          </Line>
        </Content>
        <ContainerButtons>
          <Button onPress={onDelete}>
            <Feather name="trash-2" size={28} color={theme.colors.text_title} />
          </Button>
          <Button onPress={openModal}>
            <Feather name="edit-3" size={28} color={theme.colors.text_title} />
          </Button>
        </ContainerButtons>
      </Container>
    </>
  );
}
