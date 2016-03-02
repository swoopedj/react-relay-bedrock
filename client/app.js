var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/CommentBox');

ReactDOM.render(
  <CommentBox message={"This is a message"}/>,
  document.getElementById('root')
);