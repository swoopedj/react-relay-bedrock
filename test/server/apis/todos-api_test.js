require(TEST_HELPER)
const db = require(__server + '/lib/db');
const sinon = require('sinon');
const Todo = require(__server + '/models/todos');
var request = require('supertest');
require('sinon-as-promised');

var app = null;
describe("The Todos API", function() {
  beforeEach(function(){
  	app = TestHelper.createApp();

  });

  describe('GET /todos', function(){
    it_.only('returns all todos', function * (){
        var read = sinon.stub(Todo, 'read')
        read.resolves([{text : "testing"}]);
        yield request(app)
		      .get('/api/todos')
		      .expect(200)
		      .expect(function(response) {
		        expect(response.body.todos).to.include({text : "testing"});
		      })
		    read.restore();
    });

  });
  


});



