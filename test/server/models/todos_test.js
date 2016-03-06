/* global TEST_HELPER describe it_ TestHelper __server beforeEach expect */
require(TEST_HELPER);
const db = require(`${__server}/lib/db`);
const Todo = require(`${__server}/models/todos`);


describe('The Todos Model', () => {
  beforeEach(() => {
    return TestHelper.emptyDb(db);
  });

  it_('adds a todo', function * adds() {
    const newTodo = {
      completed: true,
      text: 'test',
    };
    const createdModel = yield Todo.create(newTodo)
    .catch((error) => {
      throw error;
    });
    expect(createdModel).to.include(newTodo);
  });

  it_('gets all todos', function * gets() {
    const newTodo = {
      completed: true,
      text: 'test',
    };
    yield Todo.create(newTodo);
    const foundModels = yield Todo.read();
    expect(foundModels[0]).to.include(newTodo);
  });
});

