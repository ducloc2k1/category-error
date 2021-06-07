import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../app/store';
import { decrease, increase } from './counterSlice';

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

  console.log(store.getState());

  return (
    <div>
      This is: {counter}
      <button onClick={handleIncrementClick}>increase</button>
      <button onClick={handleDecrementClick}>decrease</button>
    </div>
  );
}

export default CounterFeature;
