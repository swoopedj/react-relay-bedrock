const _ = require('underscore');
const ModelMocker = ({ mocks = [], delay = 500, errors = {}}) => {
  let mocker = {};
  var state = {
    mocks : mocks,
  };

  const getPromise = (name, func, args) => {
    console.log(name);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (_.has(errors, name)) reject(errors[name]);
        resolve(func.apply(args));
      }, delay);
    });
  };

  const bindFunction = (name, func) =>  {
    mocker[name] = () => {
      let args = arguments;
      return getPromise(name, func, args);
    };
  };

  bindFunction('create', (newItem) => {
    state.mocks.push(newItem);
    console.log(newItem);
    return newItem;
  });

  return mocker;
};






module.exports = ModelMocker;
