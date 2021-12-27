import { createSlice } from '@reduxjs/toolkit';

interface AuthProps {
  user: {
    id: number;
    email: string;
    isAdmin: number;
    name: string;
    token: string;
  } | null;
}

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
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
