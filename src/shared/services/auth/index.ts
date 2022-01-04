import config from '../axios-config';
import { ResetPasswordProps, ReqTypeProps, UserProps } from '@models/AuthProps';

export const authServices = () => {
  async function loginUser(body: UserProps) {
    return config.post('/login', body);
  }

  async function getUser() {
    return config.get('/user/my-account');
  }

  async function updateUser(body: UserProps) {
    return config.put('/user/update', body);
  }

  async function createUser(body: UserProps) {
    return config.post('/user/create', body);
  }

  async function getChangePasswordToken(body: UserProps) {
    return config.post('/reset', body);
  }

  async function changePassword(body: ResetPasswordProps) {
    return config.post(`/reset/${body.token}`, body.req);
  }

  async function updateType(body: ReqTypeProps) {
    return config.put(`/admin/update-game/${body.id}`, body.req);
  }

  async function createType(body: ReqTypeProps) {
    return config.post('/admin/create-game', body.req);
  }

  async function deleteType(body: ReqTypeProps) {
    return config.delete(`/admin/delete-game/${body.id}`);
  }

  return {
    loginUser,
    getUser,
    updateUser,
    createUser,
    getChangePasswordToken,
    changePassword,
    updateType,
    createType,
    deleteType
  };
};
