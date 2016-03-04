const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;
const App = require('./containers/App');
const RouterTest = require('./components/RouterTest');
const configureStore = require('./store/configureStore');
const { fetchTodos } = require('./actionCreators/todos');
const { syncHistoryWithStore } = require('react-router-redux');
const { Router, Route, browserHistory } = require('react-router');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
store.dispatch(fetchTodos());

ReactDOM.render(
	<Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/test" component={RouterTest} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
