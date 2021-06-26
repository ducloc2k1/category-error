import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  form: PropTypes.object.isRequired,
};

function PasswordField(props) {
  const { name, label, form } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((preState) => !preState);
  };

  return (
    <>
      <FormControl fullWidth variant='outlined' margin='normal'>
        <InputLabel htmlFor={name}>{name}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          type={showPassword ? 'text' : 'password'}
          label={label}
          render={({ field: { onChange, onBlur, name, ref }, fieldState: { error } }) => {
            const hasError = error;
            return (
              <>
                <OutlinedInput
                  id={name}
                  type={showPassword ? 'text' : 'password'}
                  onChange={onChange}
                  label={label}
                  error={!!hasError}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText error={!!hasError}>{error?.message}</FormHelperText>
              </>
            );
          }}
        ></Controller>
      </FormControl>
    </>
  );
}

export default PasswordField;
