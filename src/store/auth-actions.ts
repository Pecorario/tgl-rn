import { Dispatch } from 'redux';
import { authActions } from './auth-slice';
import { UserProps } from '@models/AuthProps';
import Toast from 'react-native-toast-message';

export const sendLogin = ({ email, password }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://192.168.0.106:3333/login', {
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

    dispatch(authActions.removeMessage());

    try {
      const { user, token } = await sendRequest();

      dispatch(
        authActions.onLogin({
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user['is_admin'],
          token: token.token
        })
      );
    } catch (error) {
      const message = 'Email e/ou senha inválidos';
      dispatch(authActions.addMessage({ message }));
      console.log(error);
    }
  };
};

export const getUserData = ({ token }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        'http://192.168.0.106:3333/user/my-account',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error('GetUserData failed!');
      }

      return data;
    };

    try {
      const { name, email } = await sendRequest();

      dispatch(
        authActions.updateAccount({
          name: name,
          email: email
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

export const updateUserData = ({ name, email, token }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://192.168.0.106:3333/user/update', {
        method: 'PUT',
        body: JSON.stringify({
          email: email,
          name: name
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Update User failed!');
      }

      return data;
    };

    try {
      const { email, name } = await sendRequest();

      dispatch(
        authActions.updateAccount({
          name: name,
          email: email
        })
      );

      Toast.show({
        type: 'success',
        text1: 'Alteração feita com sucesso!'
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

export const getToken = ({ email }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://192.168.0.106:3333/reset', {
        method: 'POST',
        body: JSON.stringify({
          email: email
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Get token failed!');
      }

      return data;
    };
    dispatch(authActions.removeMessage());

    try {
      const { token } = await sendRequest();

      dispatch(
        authActions.addToken({
          token
        })
      );
    } catch (error) {
      const message = 'Email não encontrado.';
      dispatch(authActions.addMessage({ message }));
      console.log(error);
    }
  };
};

export const updatePassword = ({ token, password }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`http://192.168.0.106:3333/reset/${token}`, {
        method: 'POST',
        body: JSON.stringify({
          password: password
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      // const data = await response.json();

      if (!response.ok) {
        throw new Error('Update User failed!');
      }

      // return data;
    };

    try {
      await sendRequest();
      dispatch(authActions.removeToken());

      Toast.show({
        type: 'success',
        text1: 'Senha alterada com sucesso!'
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

export const createUser = ({ email, password, name }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://192.168.0.106:3333/user/create', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          name: name
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
      await sendRequest();
      Toast.show({
        type: 'success',
        text1: 'Usuário criado com sucesso!'
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
