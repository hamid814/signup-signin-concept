import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    state: 'signup',
    alertState: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get todos
  const setState = (state) => {
    dispatch({
      type: 'set-state',
      payload: state
    });
  };

  const setAlert = () => {
    dispatch({
      type: 'set-alert-state',
      payload: true
    })

    setTimeout(() => {
      dispatch({
        type: 'set-alert-state',
        payload: false
      })
    }, 5000);
  }

  return (
    <Context.Provider
      value={{
        state: state.state,
        alertState: state.alertState,
        setState,
        setAlert,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;