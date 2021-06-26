import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice.js';
import LoginForm from '../LoginForm';

Login.propTypes = {};

function Login(props) {
  const { handleClose } = props;

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(values) {
    // set default username = email;
    // values.username = values.email;
    // delete values.email;

    try {
      const action = login(values);

      const loginThunk = await dispatch(action);

      const result = await unwrapResult(loginThunk);

      handleClose();
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error', resumeHideDuration: 1000 });
    }
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
