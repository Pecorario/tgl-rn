import config from '../axios-config';
import { ReqSaveGameProps, ReqListGameProps } from '@models/GameProps';

export const gameServices = () => {
  async function getTypes() {
    return config.get('/cart_games');
  }

  async function saveGame(body: ReqSaveGameProps) {
    return config.post('/bet/new-bet', body);
  }

  async function listGames(req: ReqListGameProps) {
    return config.get('/bet/all-bets', { params: { type: req } });
  }

  return {
    getTypes,
    saveGame,
    listGames
  };
};
