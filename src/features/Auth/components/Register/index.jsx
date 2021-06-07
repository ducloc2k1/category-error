import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../../userSlice.js';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(values) {
    // set default username = email;

    try {
      values.username = values.email;

      const action = register(values);

      const registerThunk = await dispatch(action);

      console.log(registerThunk);

      const result = await unwrapResult(registerThunk);

      enqueueSnackbar('đăng ký thành công !!!');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error', resumeHideDuration: 1000 });
    }
  }
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
