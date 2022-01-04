import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { createType, updateType } from '@store/auth-actions';

import { InputProfile } from '@components/InputProfile';
import { Button } from '@components/Button';

import { FormTypesProps } from '@models/UIProps';
import { Container, Line, ContainerButtons, Title } from './styles';

export function FormTypes({ title, typeForm, data, onCancel }: FormTypesProps) {
  const theme = useTheme();
  const dispatch = useDispatch();

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
    if (typeForm === 'add') {
      setType('');
      setDescription('');
      setRange('');
      setPrice('');
      setMaxNumber('');
      setColor('');
    } else {
      if (data?.color !== undefined) {
        setType(data?.name);
        setDescription(data?.description);
        setRange(data?.range.toString());
        setPrice(data?.price.toString());
        setMaxNumber(data?.maxNumber.toString());
        setColor(data?.color);
      }
    }
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
      dispatch(createType({ data: newData }));
      resetInputs();
    } else {
      {
        data !== undefined && dispatch(updateType({ data: newData }));
      }
      resetInputs();
    }
  };

  const onCancelModal = () => {
    if (typeForm === 'add') {
      resetInputs();
    } else {
      if (onCancel !== undefined) {
        onCancel();
      }
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
