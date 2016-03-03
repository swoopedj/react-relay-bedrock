var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var todoApp = require('./reducers/todoApp');
var App = require('./containers/App');
var store = createStore(todoApp);
ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);