import { createSlice } from '@reduxjs/toolkit';
import { AuthProps } from '@models/AuthProps';

const initialState: AuthProps = {
  user: null,
  tokenPassword: ''
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
    },
    onLogout(state) {
      state.user = null;
    },
    updateAccount(state, action) {
      const { name, email } = action.payload;

      if (state.user !== null) {
        state.user.name = name;
        state.user.email = email;
      }
    },
    addToken(state, action) {
      const token = action.payload;
      state.tokenPassword = token.token;
    },
    removeToken(state) {
      state.tokenPassword = '';
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
