import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@material-ui/core";
import { Controller } from "react-hook-form";

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  form: PropTypes.object.isRequired,
};

function CheckboxField(props) {
  const { form, name, label } = props;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <>
          <label>Check Value</label>
          <Checkbox {...field} label={label} checked={field.value} />
        </>
      )}
    ></Controller>
  );
}

export default CheckboxField;
