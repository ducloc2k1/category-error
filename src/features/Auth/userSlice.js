import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import { StorageKey } from '../../constants/storage-keys';

const initialState = { current: JSON.parse(localStorage.getItem('user')) || {}, settings: {} };

export const register = createAsyncThunk('user/register', async function (payload) {
  // await productApi.get('notIdProduct');
  debugger;
  const data = await userApi.register(payload);

  localStorage.setItem(StorageKey.TOKEN, data.jwt);

  localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));

  return data.user;
});

export const login = createAsyncThunk('user/login', async function (payload) {
  // await productApi.get('notIdProduct');
  const data = await userApi.login(payload);

  localStorage.setItem(StorageKey.TOKEN, data.jwt);

  localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.current = {};
      localStorage.removeItem(StorageKey.TOKEN);
      localStorage.removeItem(StorageKey.USER);
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;

export default reducer;
