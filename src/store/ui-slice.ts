import { createSlice } from '@reduxjs/toolkit';

interface NotificationProps {
  status: string;
  title: string;
  message: string;
}

interface UiProps {
  notification: NotificationProps | null;
}

const initialState: UiProps = {
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
