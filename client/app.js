var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var App = require('./containers/App');
let configureStore = require('./store/configureStore')
let {fetchTodos} = require('./actionCreators/todos');
let store = configureStore();
store.dispatch(fetchTodos());
ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);