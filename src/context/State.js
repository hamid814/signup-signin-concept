import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    state: 'signup'
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get todos
  const setState = (state) => {
    dispatch({
      type: 'set-state',
      payload: state
    });
  };

  return (
    <Context.Provider
      value={{
        state: state.state,
        setState,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;