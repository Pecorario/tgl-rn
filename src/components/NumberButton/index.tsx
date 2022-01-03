import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { gameActions } from '@store/game-slice';

import { NumberButtonProps } from '@models/ButtonProps';
import { Container, Text } from './styles';

export function NumberButton({ number, color }: NumberButtonProps) {
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();
  const numbers = useSelector(
    (state: RootStateOrAny) => state.game.selectedNumbers
  );

  useEffect(() => {
    if (numbers.includes(number)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [numbers, number]);

  const onPressButton = (number: number) => {
    dispatch(gameActions.addNumber(number));
  };

  return (
    <TouchableOpacity onPress={() => onPressButton(number)}>
      <Container selected={selected} color={color}>
        <Text>{number}</Text>
      </Container>
    </TouchableOpacity>
  );
}
