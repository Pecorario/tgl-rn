import { Dispatch } from 'redux';
import Toast from 'react-native-toast-message';
import { authActions } from './auth-slice';
import { BodyReqTypeProps, UserProps } from '@models/AuthProps';
import { authServices } from '@shared/services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sendLogin = ({ email, password }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const body = { email: email, password: password };
    dispatch(authActions.setLoading());
    dispatch(authActions.removeMessage());

    try {
      const response = await authServices().loginUser(body);
      const { user, token } = response.data;
      await AsyncStorage.setItem('token', token.token);

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
    }
  };
};

export const getUserData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    try {
      const response = await authServices().getUser();
      const { name, email } = response.data;

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
    }
  };
};

export const updateUserData = ({ name, email }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const body = { name: name, email: email };

    dispatch(authActions.setLoading());

    try {
      const response = await authServices().updateUser(body);
      const { email, name } = response.data;

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
    }
  };
};

export const getToken = ({ email }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const body = { email: email };

    dispatch(authActions.setLoading());
    dispatch(authActions.removeMessage());

    try {
      const response = await authServices().getChangePasswordToken(body);
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);

      dispatch(authActions.setNotLoading());
      dispatch(
        authActions.addToken({
          token
        })
      );
    } catch (error) {
      const message = 'Email not found.';
      dispatch(authActions.addMessage({ message }));
    }
  };
};

export const updatePassword = ({ password }: UserProps) => {
  ('');
  return async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());

    try {
      const token = await AsyncStorage.getItem('token');
      const req = { password: password };
      const body = {
        token: token,
        req: req
      };

      await authServices().changePassword(body);

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
    }
  };
};

export const createUser = ({ email, password, name }: UserProps) => {
  return async (dispatch: Dispatch) => {
    const body = { name: name, email: email, password: password };

    dispatch(authActions.setLoading());

    try {
      await authServices().createUser(body);

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
    }
  };
};

export const updateType = ({ data }: BodyReqTypeProps) => {
  return async (dispatch: Dispatch) => {
    const req = {
      type: data.name,
      description: data.description,
      range: +data.range,
      price: +data.price,
      max_number: +data.maxNumber,
      color: data.color
    };
    const body = {
      req: req,
      id: data.id
    };

    dispatch(authActions.setLoading());
    dispatch(authActions.defaultChanges());

    try {
      await authServices().updateType(body);
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
    }
  };
};

export const createType = ({ data }: BodyReqTypeProps) => {
  return async (dispatch: Dispatch) => {
    const body = {
      req: {
        type: data.name,
        description: data.description,
        range: +data.range,
        price: +data.price,
        max_number: +data.maxNumber,
        color: data.color
      }
    };

    dispatch(authActions.setLoading());
    dispatch(authActions.defaultChanges());

    try {
      await authServices().createType(body);
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
    }
  };
};

export const deleteType = ({ id }: BodyReqTypeProps) => {
  return async (dispatch: Dispatch) => {
    const body = { id: id };
    dispatch(authActions.setLoading());
    dispatch(authActions.defaultChanges());

    try {
      await authServices().deleteType(body);
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
    }
  };
};
