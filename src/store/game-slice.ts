import { createSlice } from '@reduxjs/toolkit';
import { GameProps } from '@models/GameProps';

const initialState: GameProps = {
  cartIsOpen: false,
  types: [],
  minCartValue: 0
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    onModalOpen(state) {
      state.cartIsOpen = true;
    },
    onModalClose(state) {
      state.cartIsOpen = false;
    },
    addGames(state, action) {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    }
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
