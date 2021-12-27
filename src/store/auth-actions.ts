import { Dispatch } from 'redux';
import { authActions } from './auth-slice';
import { fetchGamesData } from './game-actions';
import { uiActions } from './ui-slice';

interface UserProps {
  email: string;
  password: string;
}

export const sendLogin = ({ email, password }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://192.168.0.104:3333/login', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Login failed!');
      }

      return data;
    };

    try {
      const { user, token } = await sendRequest();
      // console.log('UserData:', user);

      dispatch(
        authActions.onLogin({
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user['is_admin'],
          token: token.token
        })
      );

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Logged successfully!'
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Senha e/ou e-mail inválidos'
        })
      );
      console.log(error);
    }
  };
};
