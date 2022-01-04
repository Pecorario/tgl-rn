import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { gameActions } from '@store/game-slice';
import { saveGame } from '@store/game-actions';
import { getMoneyInReal } from '@shared/helpers/utils';

import { Cart } from '@components/Cart';

import { ButtonProps } from '@models/ButtonProps';
import { Container } from './styles';

export function CartButton({ color }: ButtonProps) {
  const theme = useTheme();

  const dispatch = useDispatch();
  const cartIsOpen = useSelector(
    (state: RootStateOrAny) => state.game.cartIsOpen
  );
  const games = useSelector((state: RootStateOrAny) => state.game.games);
  const totalPrice = useSelector(
    (state: RootStateOrAny) => state.game.totalPrice
  );
  const minCartValue = useSelector(
    (state: RootStateOrAny) => state.game.minCartValue
  );

  const formatCartValue = getMoneyInReal(Number(minCartValue));

  const onModalOpen = () => {
    dispatch(gameActions.onModalOpen());
  };

  const onModalClose = () => {
    dispatch(gameActions.onModalClose());
  };

  const iconColor = cartIsOpen ? theme.colors.primary : color;

  const onSave = () => {
    if (+totalPrice < 30) {
      alert(`The cart total value is less than ${formatCartValue}.`);
    } else {
      dispatch(saveGame({ games }));
      dispatch(gameActions.cleanCart());
      onModalClose();
    }
  };

  return (
    <>
      <Cart visible={cartIsOpen} onClose={onModalClose} onSave={onSave} />
      <TouchableOpacity onPress={onModalOpen}>
        <Container>
          <FontAwesome5 name="cart-plus" size={22} color={iconColor} />
        </Container>
      </TouchableOpacity>
    </>
  );
}
