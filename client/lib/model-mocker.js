const ModelMocker = ({ mocks, delay = 500, errors}) => {
  let mocker = {};
  let state = {};

  const getPromise = (name, func, args) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (errors.hasOwnProperty(name)) reject(errors[name]);
        resolve(func.apply(args));
      }, delay);
    });
  };

  const bindFunction = (name, func) =>  {
    mocker[name] = () => {
      let args = arguments;
      return getPromise(name, func, args);
    }
  };

  bindFunction('create', (newItem) => {
    state.push(newItem);
    return newItem;
  });
};




module.exports = ModelMocker;
