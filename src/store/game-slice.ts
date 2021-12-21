import { createSlice } from '@reduxjs/toolkit';

interface InitialStateProps {
  cartIsOpen: boolean;
}

const initialState: InitialStateProps = {
  cartIsOpen: false
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
    }
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
