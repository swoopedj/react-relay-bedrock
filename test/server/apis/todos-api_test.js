/* global TEST_HELPER describe it_ TestHelper __server beforeEach expect */
'use strict';
require(TEST_HELPER);
const sinon = require('sinon');
const Todo = require(`${__server}/models/todos`);
const request = require('supertest');
require('sinon-as-promised');

describe('The Todos API', () => {
  let app = null;
  beforeEach(() => {
    app = TestHelper.createApp();
  });

  describe('GET /todos', () => {
    it_('returns all todos', function * testTodos() {
      const read = sinon.stub(Todo, 'read');
      read.resolves([{ text: 'testing' }]);
      yield request(app)
				.get('/api/todos')
				.expect(200)
				.expect(response => {
  expect(response.body.todos).to.include({ text: 'testing' });
				});
      read.restore();
    });
  });
});