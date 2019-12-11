export default (state, action) => {
  switch (action.type) {
    case 'set-state':
      return {
        ...state,
        state: action.payload
      };
    default:
      return state;
  }
};
