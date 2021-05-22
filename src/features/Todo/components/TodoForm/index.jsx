import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import "./style.scss";
import { useForm } from "react-hook-form";
import CheckboxField from "../../../../components/form-controls/CheckBoxField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  function handleSubmit(values) {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    console.log(`Form value: `, values);
  }

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("bạn phải nhập trường này !!!")
      .min(6, "Min 6 chars"),
  });

  const todoForm = useForm({
    defaultValues: {
      title: "",
      checkBox: true,
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <h2>TodoForm</h2>
      <form
        className="todo__form"
        onSubmit={todoForm.handleSubmit(handleSubmit)}
      >
        <InputField
          name="title"
          form={todoForm}
          label="todo"
          disabled={false}
        />
        <CheckboxField name="checkBox" form={todoForm} label="check value" />
      </form>
    </>
  );
}

export default TodoForm;
