const _ = require('underscore');
const R = require('ramda');
const indexAndConcat = require('./redux-helpers').indexAndConcat;
const ModelMocker = ({ mocks = [], delay = 500, errors = {}}) => {
  const processMocks = () => {
    return R.values(R.mapObjIndexed(
      (mock, index) => R.assoc('id', parseInt(index, 0), mock),
      mocks
    ));
  };

  const mocker = {};

  const state = {
    mocks: processMocks(),
  };

  const getPromise = (name, func, args) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (_.has(errors, name)) reject(errors[name]);
        resolve(func.apply(null, args));
      }, delay);
    });
  };

  const bindFunction = (name, func) => {
    mocker[name] = (...args) => getPromise(name, func, args);
  };

  const getMaxID = () => {
    return state.mocks.reduce((max, next) => {
      return next.id > max ? next.id : max;
    }, 0);
  };

  bindFunction('create', (newItem) => {
    state.mocks = indexAndConcat(newItem, state.mocks, getMaxID() + 1);
    return state.mocks[state.mocks.length - 1];
  });
  bindFunction('read', () => state.mocks);

  bindFunction('update', (id, fields) => {
    const mocks = state.mocks;
    const index = R.findIndex(R.propEq('id', id), mocks);
    const transformations = R.mapObjIndexed((value, key) => R.assoc(key, value));
    state.mocks = R.update(index, R.evolve(transformations, mocks[index]), mocks);
    return state.mocks[index];
  });
  bindFunction('delete', (id) => {
    _.each(state.mocks, (mock, index) => {
      // console.log(mock);
      if (mock.id === id) {
        state.mocks.splice(index, 1);
      }
    });
    return id;
  });

  return mocker;
};
var test = {
  stuff : 1,
};

console.log(R.evolve({stuff : R.identity(10)}, test))


module.exports = ModelMocker;
