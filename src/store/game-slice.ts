import { createSlice } from '@reduxjs/toolkit';
import { GameProps, TypeProps } from '@models/GameProps';

const initialState: GameProps = {
  cartIsOpen: false,
  types: [],
  typeActive: null,
  minCartValue: 0,
  bets: [],
  selectedNumbers: []
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
    addTypes(state, action) {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    },
    selectType(state, action) {
      const selectedGame = action.payload;
      state.selectedNumbers = [];
      state.types.map((game: TypeProps) => {
        if (game.name === selectedGame) {
          if (game.selected === true) {
            state.typeActive = null;
            return (game.selected = false);
          }
          state.typeActive = {
            id: game.id,
            name: game.name,
            description: game.description,
            range: game.range,
            price: game.price,
            maxNumber: game.maxNumber,
            color: game.color,
            selected: true
          };
          return (game.selected = true);
        } else {
          return (game.selected = false);
        }
      });
    }
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
