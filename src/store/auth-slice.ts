import { createSlice } from '@reduxjs/toolkit';
import { AuthProps } from '@models/AuthProps';

const initialState: AuthProps = {
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin(state, action) {
      const { id, email, isAdmin, name, token } = action.payload;

      state.user = {
        id,
        name,
        email,
        isAdmin,
        token
      };

      // console.log('User tratado:', state.user);
    },
    onLogout(state) {
      state.user = null;
    },
    updateAccount(state, action) {
      const { name, email } = action.payload;

      if (state.user !== null) {
        state.user.name = 'FOI' + name;
        state.user.email = email;
      }
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
