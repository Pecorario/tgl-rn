import { createSlice } from '@reduxjs/toolkit';

interface notificationProps {
  status: string;
  title: string;
  message: string;
}

interface uiProps {
  notification: notificationProps | null;
}

const initialState: uiProps = {
  notification: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
