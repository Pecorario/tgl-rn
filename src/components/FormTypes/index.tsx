import React, { useEffect, useState } from 'react';
import { Container, Line, ContainerButtons, Title } from './styles';
import { useTheme } from 'styled-components';
import { InputProfile } from '@components/InputProfile';
import { Button } from '@components/Button';
import { TypeProps } from '@models/GameProps';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { authActions } from '@store/auth-slice';
import { createType, updateType } from '@store/auth-actions';
import { fetchTypesData } from '@store/game-actions';

interface FormTypesProps {
  title: string;
  typeForm: 'add' | 'edit';
  data?: TypeProps;
  onCancel: () => {};
}

export function FormTypes({ title, typeForm, data, onCancel }: FormTypesProps) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootStateOrAny) => state.auth.user);

  const [type, setType] =
    typeForm === 'add' ? useState('') : useState(data?.name);
  const [description, setDescription] =
    typeForm === 'add' ? useState('') : useState(data?.description);
  const [range, setRange] =
    typeForm === 'add' ? useState('') : useState(data?.range.toString());
  const [price, setPrice] =
    typeForm === 'add' ? useState('') : useState(data?.price.toString());
  const [maxNumber, setMaxNumber] =
    typeForm === 'add' ? useState('') : useState(data?.maxNumber.toString());
  const [color, setColor] =
    typeForm === 'add' ? useState('') : useState(data?.color);

  const resetInputs = () => {
    setType('');
    setDescription('');
    setRange('');
    setPrice('');
    setMaxNumber('');
    setColor('');
  };

  const saveInputs = () => {
    const newData = {
      name: type,
      description,
      range,
      price,
      maxNumber,
      color,
      id: data?.id
    };
    return newData;
  };

  const onSaveModal = () => {
    const newData = saveInputs();
    if (typeForm === 'add') {
      console.log('Type Add');
      dispatch(createType({ data: newData, token }));
      resetInputs();
    } else {
      {
        data !== undefined && dispatch(updateType({ data: newData, token }));
      }
      onCancel();
    }
  };

  const onCancelModal = () => {
    if (typeForm === 'add') {
      console.log('Cancel add');
    } else {
      onCancel();
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <InputProfile
        label="Nome"
        value={type}
        onChangeText={setType}
        editable={true}
        placeholder="Digite o nome do jogo."
      />
      <InputProfile
        label="Descrição"
        value={description}
        onChangeText={setDescription}
        editable={true}
        placeholder="Digite uma descrição."
        multiline
        numberOfLines={4}
      />
      <Line>
        <InputProfile
          label="Tamanho"
          value={range}
          onChangeText={setRange}
          editable={true}
          placeholder="0"
          keyboardType="numeric"
          isFlexRow={true}
        />
        <InputProfile
          label="Preço"
          value={price}
          onChangeText={setPrice}
          editable={true}
          placeholder="0"
          keyboardType="numeric"
          isFlexRow={true}
        />
      </Line>

      <Line>
        <InputProfile
          label="Limite"
          value={maxNumber}
          onChangeText={setMaxNumber}
          editable={true}
          placeholder="0"
          keyboardType="numeric"
          isFlexRow={true}
        />
        <InputProfile
          label="Cor"
          value={color}
          onChangeText={setColor}
          editable={true}
          placeholder="#000000"
          isFlexRow={true}
        />
      </Line>
      <ContainerButtons>
        <Button
          type="default"
          title="Cancel"
          onPress={onCancelModal}
          color={theme.colors.text_title}
        />
        <Button
          type="save"
          title="Save"
          onPress={onSaveModal}
          color={theme.colors.primary}
        />
      </ContainerButtons>
    </Container>
  );
}
