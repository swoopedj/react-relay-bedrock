const { createReducer } = require('../lib/redux-helpers');

const isLoading = createReducer(false, {
  REQUEST_TODOS: () => {
    return true;
  },
  RECEIVE_TODOS: () => {
    return false;
  },
});

module.exports = isLoading;
