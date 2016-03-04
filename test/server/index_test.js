// require(TEST_HELPER) // <--- This must be at the top of every test file.

// var request = require('supertest')
// var routes = require(__server + '/index.js')

// describe("The Server", function() {

//   var app = TestHelper.createApp()
//   app.use('/', routes)
//   app.testReady()

//   it_("serves an example endpoint", function * () {
//     yield request(app)
//       .get('/api/todo-test')
//       .expect(200)
//       .expect(function(response) {
//         expect(response.body).to.include('node')
//         expect(response).to.be.json;
// 		  })
// 	})
// 	// console.log('response:', res)

// 	//test for GET all todos
// 	it_('should POST into Todos', function * (){
//       var newTodo = new Todo({
//       	id: 1,
// 			text:'Test single todo',
// 			completed: true
// 		});

// 			yield request(app)
// 			  .post('/api/todos')
// 			  .expect(300)
			 //  .expect(function(res){
			 //  	expect(res).to.be.json;
			 //  	expect(res.body).to.be.a('array');
				// expect(res.body[0]).to.have.property('text');
			 //  	expect(res.body[0]).to.have.property('completed');
			 //  	expect(res.body[0]).text.to.equal("Test text");
			 //  	expect(res.body[0]).completed.to.equal(false);

			 //  })
		//})

	// it_('should list ALL todos on /todos GET', function * (){

	// 	yield request(app)
	// 	  .get('/api/todos')
	// 	  .expect(200)
	// 	 //  .expect(function(res){
	// 	 //  	expect(res).to.be.json;
	// 	 //  	expect(res.body).to.be.a('array');
	// 		// expect(res.body[0]).to.have.property('text');
	// 	 //  	expect(res.body[0]).to.have.property('completed');
	// 	 //  	expect(res.body[0]).text.to.equal("Test text");
	// 	 //  	expect(res.body[0]).completed.to.equal(false);

	// 	 //  })
	// })

	//test for GET single todo
	// it_('should list a SINGLE todo on /todo GET', function * (){
	// 	var newTodo = new Todo({
	// 		text:'Test single todo',
	// 		completed: true
	// 	});
	// 	// newTodo.save()	//save newTodo to db?

	// 	yield request(app)
	// 	  .get('/api/todo')  //add todoId to get request 
	// 	  .expect(200)
	// 	  .expect(function(res){
	// 		expect(res.body).to.have.property('text');
	// 	  	expect(res.body).to.have.property('completed');
	// 	  	expect(res.body).text.to.equal('Test single todo');
	// 	  	expect(res.body).completed.to.equal(true);
	// 	  	// expect(res.body).id.to.equal(??);
	// 	  })
	// })
// })
