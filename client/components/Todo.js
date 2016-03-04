const React = require('react');
// FIXME: ESLint
const Todo = ({ text, completed, onClick }) => (
	<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </li>
);

module.exports = Todo;
