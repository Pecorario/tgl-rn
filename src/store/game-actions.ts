import { Dispatch } from 'redux';
import { gameActions } from './game-slice';
import { BetProps, TypeProps, ReqGameProps } from '@models/GameProps';
import Toast from 'react-native-toast-message';
import { gameServices } from '@shared/services/games';
import { authActions } from './auth-slice';

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
      console.log(error);
    }
  };
};

export const listGames = ({ types, token, typesGame }: any) => {
  let formatTypes;
  if (types || types.length > 0) {
    types.map((type: string) => {
      type = encodeURIComponent(type);
    });
    formatTypes = types.toString().replace(/,/g, '&');
  }
  const url =
    types.length > 0
      ? `http://192.168.18.55:3333/bet/all-bets?${formatTypes}`
      : 'http://192.168.18.55:3333/bet/all-bets';

  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    const sendRequest = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('GetGames failed!');
      }
      return data;
    };

    try {
      const data = await sendRequest();
      dispatch(authActions.setNotLoading());

      let loadedData: any = [];

      data.map((item: any) => {
        const auxColor = typesGame.find(
          (type: any) => type.id === item.type.id
        );
        const game = {
          id: item.id,
          name: item.type.type,
          price: item.price,
          numbers: item.choosen_numbers,
          color: auxColor.color,
          date: item.created_at
        };
        loadedData.push(game);
      });
      dispatch(gameActions.addFilteredGames({ filteredGames: loadedData }));
    } catch (error) {
      dispatch(authActions.setNotLoading());
      console.log(error);
    }
  };
};
