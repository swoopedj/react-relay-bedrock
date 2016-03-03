const R = require('ramda');
const createReducer = (initialState, handlers) => {
  return (state = initialState, action) =>
    R.propOr(R.identity, action.type, handlers)(state, action)
}

var indexAndConcat = (item, array) => {
	return R.compose(
		R.concat(array),
		R.assoc('index', array.length)
	)(item);
}

indexAndConcat = R.curry(indexAndConcat);

module.exports = {
	createReducer,
	indexAndConcat
};