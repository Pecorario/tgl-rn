import { Dispatch } from 'redux';
import { gameActions } from './game-slice';
import { BetProps, TypeProps } from '@models/GameProps';
import Toast from 'react-native-toast-message';
import { authActions } from './auth-slice';

export const fetchTypesData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(gameActions.setTypesNotLoaded());
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.106:3333/cart_games');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const gamesData = await fetchData();
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
        text1: 'Algo inesperado aconteceu.',
        text2: 'Tente novamente mais tarde.'
      });
      console.log(error);
    }
  };
};

export const saveGame = ({ games, token }: any) => {
  let newGames: { id: number | undefined; numbers: number[] | string }[] = [];

  games.map((game: BetProps) => {
    const item = {
      id: game.idType,
      numbers: game.numbers
    };
    newGames.push(item);
  });

  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://192.168.0.106:3333/bet/new-bet', {
        method: 'POST',
        body: JSON.stringify({
          games: newGames
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('NewBet failed!');
      }

      return data;
    };

    try {
      await sendRequest();
      Toast.show({
        type: 'success',
        text1: 'Apostas salvas com sucesso!'
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Algo inesperado aconteceu.',
        text2: 'Tente novamente mais tarde.'
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
      ? `http://192.168.0.106:3333/bet/all-bets?${formatTypes}`
      : 'http://192.168.0.106:3333/bet/all-bets';

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
        const game = {
          id: item.id,
          name: item.type.type,
          price: item.price,
          numbers: item.choosen_numbers,
          color: typesGame[item.type.id - 1].color,
          date: item.created_at
        };
        loadedData.push(game);
      });
      dispatch(gameActions.addFilteredGames({ filteredGames: loadedData }));
    } catch (error) {
      dispatch(authActions.setNotLoading());
      Toast.show({
        type: 'error',
        text1: 'Algo inesperado aconteceu.',
        text2: 'Tente novamente mais tarde.'
      });
      console.log(error);
    }
  };
};
