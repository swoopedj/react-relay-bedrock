const db = require('../lib/db');
const Todo = module.exports;

Todo.create = function create(attrs) {
  return db('todos').insert(attrs, ['id', 'text', 'completed'])
  .then((response) => {
    return response[0];
  })
  .catch((error) => {
    console.log('ERROR on Todo create', error);
    throw error;
  });
};

Todo.read = function read() {
  return db('todos').select()
  .then((response) => {
    return response;
  })
  .catch((error) => {
    console.log('ERROR', error);
    throw error;
  });
};

// Todo.update = function update(attrs) {
// };

// Todo.remove = function remove(attrs) {
// };
