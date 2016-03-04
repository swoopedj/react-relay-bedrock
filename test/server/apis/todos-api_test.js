require(TEST_HELPER)
const db = require(__server + '/lib/db');


describe("The Todos API", function() {
  beforeEach(function(){
  	return TestHelper.emptyDb(db);
  });


});

