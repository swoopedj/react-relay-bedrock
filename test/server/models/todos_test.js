require(TEST_HELPER)
const db = require(__server + '/lib/db');
const Todo = require(__server + '/models/todos')

describe("The Todos Model", function() {
  beforeEach(function(){
  	return TestHelper.emptyDb(db);
  })
  
  it_('adds a todo', function * (){
  	var newTodo = {
  		completed: true,
  		text: 'test'
  	}
  	var createdModel = yield Todo.create(newTodo)
  	.catch(function(error){
  		throw error;
  	})
  	expect(createdModel).to.include(newTodo);
  })

  it_('gets all todos', function * (){
  	var newTodo = {
  		completed: true,
  		text: 'test'
  	}
  	var item = yield Todo.create(newTodo);
  	var foundModels = yield Todo.read();
  	expect(foundModels[0]).to.include(newTodo);
  })
});

