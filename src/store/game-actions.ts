import { Dispatch } from 'redux';
import { gameActions } from './game-slice';
import { TypeProps } from '@models/GameProps';

export const fetchGamesData = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.104:3333/cart_games');

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
          maxNumber: item['max-number'],
          color: item.color,
          selected: false
        });
      });

      dispatch(
        gameActions.addGames({
          minCartValue: gamesData['min-cart-value'],
          types: loadedGames
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
