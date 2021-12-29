import { Dispatch } from 'redux';
import { gameActions } from './game-slice';
import { BetProps, TypeProps } from '@models/GameProps';
import Toast from 'react-native-toast-message';

export const fetchTypesData = () => {
  return async (dispatch: Dispatch) => {
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
      console.log(error);
    }
  };
};

export const saveGame = ({ games, token }: any) => {
  let newGames: { id: number | undefined; numbers: number[] }[] = [];

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
      console.log(error);
    }
  };
};
