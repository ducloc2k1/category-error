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
  const { name, label, disabled, form } = props;

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ field, fieldState }) => {
          const hasError = fieldState.error;
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
            />
          );
        }}
      ></Controller>
    </>
  );
}

export default InputField;
