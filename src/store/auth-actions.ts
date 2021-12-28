import { Dispatch } from 'redux';
import { authActions } from './auth-slice';
import { uiActions } from './ui-slice';
import { UserProps } from '@models/AuthProps';

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

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Dados recebidos com sucesso!'
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Erro ao procurar dados'
        })
      );
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

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Alteração dos dados bem sucedida!'
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Alteração inválida'
        })
      );
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

    try {
      const { token } = await sendRequest();

      dispatch(
        authActions.addToken({
          token
        })
      );

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Token adicionado!'
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Token inválido'
        })
      );
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

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Alteração dos dados bem sucedida!'
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Alteração inválida'
        })
      );
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

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Conta criada com sucesso!'
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
