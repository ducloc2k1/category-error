import React from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { register } from 'features/Auth/userSlice';
import RegisterForm from '../RegisterForm';

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

      debugger;

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
