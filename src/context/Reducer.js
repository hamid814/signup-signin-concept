export default (state, action) => {
  switch (action.type) {
    case 'set-state':
      return {
        ...state,
        state: action.payload
      };
    case 'set-alert-state':
      return {
        ...state,
        alertState: action.payload
      }
    default:
      return state;
  }
};
