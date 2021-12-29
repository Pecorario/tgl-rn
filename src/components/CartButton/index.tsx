import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { FontAwesome5 } from '@expo/vector-icons';
import { Cart } from '@components/Cart';

import { gameActions } from '@store/game-slice';
import { ButtonProps } from '@models/ButtonProps';
import { Container } from './styles';

export function CartButton({ color }: ButtonProps) {
  const theme = useTheme();

  const dispatch = useDispatch();
  const cartIsOpen = useSelector(
    (state: RootStateOrAny) => state.game.cartIsOpen
  );

  const onModalOpen = () => {
    dispatch(gameActions.onModalOpen());
  };

  const onModalClose = () => {
    dispatch(gameActions.onModalClose());
  };

  const iconColor = cartIsOpen ? theme.colors.primary : color;

  return (
    <>
      <Cart
        visible={cartIsOpen}
        onOpen={onModalOpen}
        onClose={onModalClose}
        onSave={onModalClose}
      />
      <TouchableOpacity onPress={onModalOpen}>
        <Container>
          <FontAwesome5 name="cart-plus" size={22} color={iconColor} />
        </Container>
      </TouchableOpacity>
    </>
  );
}
