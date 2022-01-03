import { Dispatch } from 'redux';
import Toast from 'react-native-toast-message';
import { authActions } from './auth-slice';
import { UpdateTypeProps, UserProps } from '@models/AuthProps';

export const sendLogin = ({ email, password }: UserProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());
    const sendRequest = async () => {
      const response = await fetch('http://192.168.18.55:3333/login', {
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
      dispatch(authActions.setNotLoading());

      dispatch(
        authActions.onLogin({
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.is_admin,
          token: token.token
        })
      );
    } catch (error) {
      const message = 'Invalid email or password';
      dispatch(authActions.addMessage({ message }));
      dispatch(authActions.setNotLoading());
      console.log(error);
    }
  };
};

export const getUserData = ({ token }: UserProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    const sendRequest = async () => {
      const response = await fetch(
        'http://192.168.18.55:3333/user/my-account',
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
      dispatch(authActions.setNotLoading());

      dispatch(
        authActions.updateAccount({
          name: name,
          email: email
        })
      );
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something wrong happened.',
        text2: 'Try again later.'
      });
      dispatch(authActions.setNotLoading());
      console.log(error);
    }
  };
};

export const updateUserData = ({ name, email, token }: UserProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    const sendRequest = async () => {
      const response = await fetch('http://192.168.18.55:3333/user/update', {
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

      dispatch(authActions.setNotLoading());
      dispatch(
        authActions.updateAccount({
          name: name,
          email: email
        })
      );

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
      dispatch(authActions.setNotLoading());
      console.log(error);
    }
  };
};

export const getToken = ({ email }: UserProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    const sendRequest = async () => {
      const response = await fetch('http://192.168.18.55:3333/reset', {
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
      dispatch(authActions.setNotLoading());

      dispatch(
        authActions.addToken({
          token
        })
      );
    } catch (error) {
      const message = 'Email not found.';
      dispatch(authActions.addMessage({ message }));
      console.log(error);
    }
  };
};

export const updatePassword = ({ token, password }: UserProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    const sendRequest = async () => {
      const response = await fetch(`http://192.168.18.55:3333/reset/${token}`, {
        method: 'POST',
        body: JSON.stringify({
          password: password
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Update User failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(authActions.setNotLoading());
      dispatch(authActions.removeToken());

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
      dispatch(authActions.setNotLoading());
      console.log(error);
    }
  };
};

export const createUser = ({ email, password, name }: UserProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    const sendRequest = async () => {
      const response = await fetch('http://192.168.18.55:3333/user/create', {
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
      dispatch(authActions.setNotLoading());
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
      dispatch(authActions.setNotLoading());
      console.log(error);
    }
  };
};

export const updateType = ({ data, token }: UpdateTypeProps) => {
  const { id, name, description, range, price, maxNumber, color } = data;
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());
    dispatch(authActions.defaultChanges());

    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.18.55:3333/admin/update-game/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            type: name,
            description: description,
            range: +range,
            price: +price,
            max_number: +maxNumber,
            color: color
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Update Type failed!');
      }

      return data;
    };

    try {
      await sendRequest();
      dispatch(authActions.saveChanges());
      dispatch(authActions.setNotLoading());

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
      dispatch(authActions.setNotLoading());
      dispatch(authActions.defaultChanges());
      console.log(error);
    }
  };
};

export const createType = ({ data, token }: UpdateTypeProps) => {
  const { name, description, range, price, maxNumber, color } = data;
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());
    dispatch(authActions.defaultChanges());

    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.18.55:3333/admin/create-game`,
        {
          method: 'POST',
          body: JSON.stringify({
            type: name,
            description: description,
            range: +range,
            price: +price,
            max_number: +maxNumber,
            color: color
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Create Type failed!');
      }

      return data;
    };

    try {
      await sendRequest();
      dispatch(authActions.saveChanges());
      dispatch(authActions.setNotLoading());

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
      dispatch(authActions.setNotLoading());
      dispatch(authActions.defaultChanges());
      console.log(error);
    }
  };
};

export const deleteType = ({ id, token }: UpdateTypeProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());
    dispatch(authActions.defaultChanges());

    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.18.55:3333/admin/delete-game/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Delete Type failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(authActions.saveChanges());
      dispatch(authActions.setNotLoading());

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
      dispatch(authActions.setNotLoading());
      dispatch(authActions.defaultChanges());
      console.log(error);
    }
  };
};
