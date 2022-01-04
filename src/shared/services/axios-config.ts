import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://192.168.18.55:3333',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err: AxiosError) {
    if (err.response?.status === 500) {
      throw new Error('Internal server error');
    }
    return Promise.reject(err.response);
  }
);

instance.interceptors.request.use(
  async function (config) {
    const hasToken = await AsyncStorage.getItem('token');

    if (hasToken) {
      config.headers!.Authorization = `Bearer ${hasToken}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default instance;
