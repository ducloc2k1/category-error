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
  const { name, label, disabled, form } = props;

  const [values, setValues] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((preState) => !preState);
  };

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        rules={{ maxLength: 2 }}
        render={({ field, fieldState }) => {
          const hasError = fieldState.error && fieldState.isTouched;
          return (
            <FormControl variant='outlined' fullWidth margin='normal'>
              <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
              <OutlinedInput
                id={name}
                type={showPassword ? 'text' : 'password'}
                value={values}
                onChange={handleChange('password')}
                label={label}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          );
        }}
      ></Controller>
    </>
  );
}

export default PasswordField;
