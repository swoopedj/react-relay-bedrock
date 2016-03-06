const R = require('ramda');
// FIXME: ESLint
const createReducer = (initialState, handlers) => {
  return (state = initialState, action) =>
    R.propOr(R.identity, action.type, handlers)(state, action);
};

let indexAndConcat = (item, array, index = array.length) => {
  return R.compose(
		R.concat(array),
		R.assoc('id', index)
	)(item);
};

indexAndConcat = R.curry(indexAndConcat);

module.exports = {
  createReducer,
  indexAndConcat,
};
