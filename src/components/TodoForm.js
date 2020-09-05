import React from 'react';

export default function TodoForm(props) {

  const [value, setValue] = React.useState('');

  const addTodo = (text) => {
    const todosUpdated = [ 
      ...props.todos, 
      { text: text } 
    ];
    props.setTodos(todosUpdated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return(
    <form className="todo todo-form" onSubmit={ handleSubmit }>
      <input 
        className="todo-input"
        type="text"
        value={ value }
        onChange={ handleChange }
        placeholder="Type in new todo and press 'Enter' to save"
      />
    </form>
  );
}