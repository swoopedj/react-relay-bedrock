const React = require('react');

// FIXME: ESLint
const AddTodo = ({ onSubmit }) => {
  let input;
  return (
    <div>
      {/* FIXME: ESLint */}
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        onSubmit(input.value);
        input.value = '';
      }}
      >
        {/* FIXME: ESLint */}
        <input ref={node => {
          input = node;
        }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

module.exports = AddTodo;
