import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increase());
  }

  function handleDecrementClick() {
    dispatch(decrease());
  }

  return (
    <div>
      This is: {counter}
      <button onClick={handleIncrementClick}>increase</button>
      <button onClick={handleDecrementClick}>decrease</button>
    </div>
  );
}

export default CounterFeature;
