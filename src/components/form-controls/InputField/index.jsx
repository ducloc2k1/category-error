import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  form: PropTypes.object.isRequired,
};

function InputField(props) {
  const { name, label, disabled, form } = props;
  const { formState } = form;
  const errors = formState.errors;

  const hasError = errors[name] && formState.touchedFields[name];

  console.log(formState[name]);

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        rules={{ maxLength: 2 }}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            disabled={disabled}
            fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
          />
        )}
      ></Controller>
    </>
  );
}

export default InputField;
