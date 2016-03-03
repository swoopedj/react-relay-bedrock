const R = require('ramda')
const {createReducer} = require('../lib/redux-helpers');

const isLoading = createReducer(false, {
	'REQUEST_TODOS' : (state, action) => {
    return true;
  },
  'RECEIVE_TODOS' : (state, action) => {
  	return false;
  },
});

module.exports = isLoading;