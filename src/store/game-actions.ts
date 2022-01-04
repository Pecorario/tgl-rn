import Toast from 'react-native-toast-message';
import { Dispatch } from 'redux';
import { gameActions } from './game-slice';
import { gameServices } from '@shared/services/games';
import { authActions } from './auth-slice';
import {
  BetProps,
  TypeProps,
  ReqGameProps,
  ReqListGameProps
} from '@models/GameProps';

export const fetchTypesData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(gameActions.setTypesNotLoaded());

    try {
      const response = await gameServices().getTypes();
      const gamesData = response.data;

      dispatch(gameActions.setTypesLoaded());

      const loadedGames: TypeProps[] = [];

      await gamesData.types.map((item: any) => {
        return loadedGames.push({
          id: item.id,
          name: item.type,
          description: item.description,
          range: item.range,
          price: item.price,
          maxNumber: item.max_number,
          color: item.color,
          selected: false
        });
      });

      dispatch(
        gameActions.addTypes({
          minCartValue: gamesData.min_cart_value,
          types: loadedGames
        })
      );
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something wrong happened.',
        text2: 'Try again later.'
      });
    }
  };
};

export const saveGame = ({ games }: ReqGameProps) => {
  return async (dispatch: Dispatch) => {
    let newGames: { id: number | undefined; numbers: number[] | string }[] = [];

    games.map((game: BetProps) => {
      const item = {
        id: game.idType,
        numbers: game.numbers
      };
      newGames.push(item);
    });

    const body = {
      games: newGames
    };

    dispatch(gameActions.defaultChanges());

    try {
      await gameServices().saveGame(body);
      dispatch(gameActions.saveChanges());

      Toast.show({
        type: 'success',
        text1: 'Success!'
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something wrong happened.',
        text2: 'Try again later.'
      });
    }
  };
};

export const listGames = ({ types, typesGame }: ReqListGameProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    try {
      const response = await gameServices().listGames(types);
      const data = response.data;

      dispatch(authActions.setNotLoading());

      let loadedData: any = [];

      data.map((item: any) => {
        const auxColor = typesGame?.find(
          (type: any) => type.id === item.type.id
        );
        const game = {
          id: item.id,
          name: item.type.type,
          price: item.price,
          numbers: item.choosen_numbers,
          color: auxColor?.color,
          date: item.created_at
        };
        loadedData.push(game);
      });
      dispatch(gameActions.addFilteredGames({ filteredGames: loadedData }));
    } catch (error) {
      dispatch(authActions.setNotLoading());
    }
  };
};
