/* global TEST_HELPER describe it it_ TestHelper __server __client beforeEach expect */
'use strict';
require(TEST_HELPER);
const ModelMocker = require(`${__client}/lib/model-mocker`);

describe('The model mocker', () => {
  it_.only('Inserts mock item on create', function * generator(){
    var todos = {
      mocks: [
        {
          text: 'one',
          completed: true,
        },
        {
          text: 'two',
          completed: true,
        },
      ],
      delay: 500,
    };

    const Todo = new ModelMocker(todos);
    const todo = yield Todo.create({ text: 'three', completed: false });
    expect(todo).to.contain({text: 'three', completed: false, id: 2});
  });
});
