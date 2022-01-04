import config from '../axios-config';
import { ReqSaveGameProps } from '@models/GameProps';

export const gameServices = () => {
  async function getTypes() {
    return config.get('/cart_games');
  }

  async function saveGame(body: ReqSaveGameProps) {
    return config.post('/bet/new-bet', body);
  }

  return {
    getTypes,
    saveGame
  };
};
