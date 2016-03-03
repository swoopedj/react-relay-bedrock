const R = require('ramda');
const createReducer = (initialState, handlers) => {
  return (state = initialState, action) =>
    R.propOr(identity, action.type, handlers)(state, action)
}

module.exports = {
	createReducer
};