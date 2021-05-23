import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  form: PropTypes.object.isRequired,
};

function InputField(props) {
  const { name, label, disabled, form, type } = props;

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        rules={{ maxLength: 2 }}
        render={({ field, fieldState }) => {
          const hasError = fieldState.error && fieldState.isTouched;
          return (
            <TextField
              {...field}
              label={label}
              disabled={disabled}
              fullWidth
              error={!!hasError}
              helperText={fieldState.error?.message}
              variant='outlined'
              margin='normal'
              fullWidth
              type={type || 'text'}
            />
          );
        }}
      ></Controller>
    </>
  );
}

export default InputField;
