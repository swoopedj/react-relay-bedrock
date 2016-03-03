//Do we need a .sh file with command line script in it?
//fix todo endpoint in index_test.js
//>>>>> Add Chai, Mocha, Bluebird and Body-parser to dependencies
//need Mocha-generators to enable support for ES6 generator functions?
//>>>> npm install mocha-generators --save-dev
//require('mocha-generators').install();

//set the environment variable to "test"
process.env.NODE_ENV = 'test'

//set global variables for paths to client and server directories
global.__server = __dirname + '/../server'
global.__client = __dirname + '/../client'

var routes = require(__server + '/index.js')
//require chai
var chai = require('chai');

//set global for expect function, making it available to all tests
global.expect = chai.expect;

//set global for test helper object to hold helper functions
global.TestHelper = {};

//test app
var express = require('express')


TestHelper.createApp = function(loader){
	var bodyParser = require('body-parser').json
	var app = express();
	app.use(bodyParser)

	app.testReady = function(){
		app.use(function(err, req, res, next){
			console.log('===Error===')
			console.log("   " + err.stack)
			next(err)
		})
	}
	app.use('/',  routes);
	return app
};

//Mocha helpers to support coroutines testing

//require promise library
var Bluebird = require('bluebird')

global.before_ = function(f) {before(Bluebird.coroutine(f))}
global.beforeEach_ = function(f) {beforeEach(Bluebird.coroutine(f))}
global.afterEach_ = function(f) {afterEach(Bluebird.coroutine(f))}
global.it_ = function(description, f) { it (description, Bluebird.coroutine(f))}
global.xit_ = function(description, f) {xit (description, f)}
global.it_.only = function(description, f){ it.only(description, Bluebird.coroutine(f))}


