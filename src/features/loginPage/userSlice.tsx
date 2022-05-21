import { createSlice } from '@reduxjs/toolkit';

interface UserStateTypes {
  email: string;
  name: string;
  lastname: string;
  roles: string[];
  phoneNumber: string | number;
}

const initialUserState: UserStateTypes = {
  email: '',
  name: '',
  lastname: '',
  roles: [],
  phoneNumber: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    user(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.roles = action.payload.roles;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const userActions = userSlice.actions;
