import { createSlice } from '@reduxjs/toolkit';
import { GameProps, TypeProps, BetProps } from '@models/GameProps';
import Toast from 'react-native-toast-message';

const initialState: GameProps = {
  cartIsOpen: false,
  types: [],
  filters: [],
  typeActive: null,
  filterActive: null,
  minCartValue: 0,
  games: [],
  selectedNumbers: [],
  totalPrice: 0,
  counter: 0
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
      state.filters = action.payload.types;
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
    },
    resetTypeDefault(state) {
      state.selectedNumbers = [];
      state.types.map((game: TypeProps, index: number) => {
        if (game.id === 1) {
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
    },
    resetFilters(state) {
      state.filters.map((game: TypeProps) => {
        return (game.selected = false);
      });
      state.filterActive = null;
    },
    addNumber(state, action) {
      const newNumber = +action.payload;
      let auxNumbers = [...state.selectedNumbers];

      const isThisNumberAlreadyOnArray =
        state.selectedNumbers.includes(newNumber);

      const isThisGameAlreadyFullOnArray = () => {
        return state.selectedNumbers.length === state.typeActive?.maxNumber;
      };

      if (isThisNumberAlreadyOnArray) {
        const index = state.selectedNumbers.indexOf(newNumber);
        auxNumbers.splice(index, 1);
        state.selectedNumbers = auxNumbers;
      } else if (
        !isThisNumberAlreadyOnArray &&
        !isThisGameAlreadyFullOnArray()
      ) {
        auxNumbers = [...state.selectedNumbers, newNumber];
        state.selectedNumbers = auxNumbers;
      } else {
        Toast.show({
          type: 'warn',
          text1: 'Máximo de números atingido.',
          text2: 'Limpe o jogo ou adicione ao carrinho.'
        });
        return;
      }
    },
    clearGame(state) {
      state.selectedNumbers = [];
    },
    completeGame(state) {
      if (state.typeActive !== null) {
        let missingNumbers =
          state.typeActive.maxNumber - state.selectedNumbers.length;

        if (missingNumbers === 0) {
          missingNumbers = state.typeActive.maxNumber;
          state.selectedNumbers = [];
        }

        for (let i = 0; i < missingNumbers; i++) {
          let randomNumber = Math.round(
            Math.random() * (state.typeActive.range - 1) + 1
          );

          while (state.selectedNumbers.includes(randomNumber)) {
            randomNumber = Math.round(
              Math.random() * (state.typeActive.range - 1) + 1
            );
          }

          state.selectedNumbers.push(+randomNumber);
        }
      }
    },
    addGameToCart(state) {
      if (state.typeActive !== null) {
        const missingNumbers =
          state.typeActive.maxNumber - state.selectedNumbers.length;

        state.selectedNumbers.sort((a, b) => a - b);

        const isThisGameAlreadyFullOnArray = () => {
          return state.selectedNumbers.length === state.typeActive?.maxNumber;
        };

        const isThisGameAlreadyPicked = (arr: number[]) => {
          return state.games.some(
            game => game.numbers.toString() === arr.toString()
          );
        };

        if (!isThisGameAlreadyFullOnArray()) {
          if (missingNumbers === 1) {
            Toast.show({
              type: 'warn',
              text1: `${missingNumbers} número faltando!`
            });
            return;
          }
          Toast.show({
            type: 'warn',
            text1: `${missingNumbers} números faltando!`
          });
          return;
        } else if (isThisGameAlreadyPicked(state.selectedNumbers)) {
          state.selectedNumbers = [];
          Toast.show({
            type: 'warn',
            text1: 'Este jogo já foi escolhido por você.'
          });
          return;
        }

        const day = new Date().toLocaleString('pt-BR', { day: '2-digit' });
        const month = new Date().toLocaleString('pt-BR', { month: '2-digit' });
        const year = new Date().getFullYear();

        const game = {
          id: state.counter,
          idType: state.typeActive.id,
          name: state.typeActive.name,
          color: state.typeActive.color,
          price: state.typeActive.price,
          numbers: state.selectedNumbers,
          date: `${day}/${month}/${year}`
        };

        state.totalPrice = state.totalPrice + state.typeActive.price;
        state.games.push(game);
        state.counter++;
        state.selectedNumbers = [];
      }
    },
    removeItemOnCart(state, action) {
      const id = action.payload;
      const existingItem = state.games.find((game: BetProps) => game.id === id);
      if (existingItem) {
        state.games = state.games.filter((game: BetProps) => game.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
      }
    }
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
