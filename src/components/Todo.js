import React from 'react';

export default function Todo(props) {

  const completeTodo = (index, todos) => {
    const todosUpdated = [ ...todos ];
    todosUpdated[index].completed = !todosUpdated[index].completed;
    props.setTodos(todosUpdated);
  };

  const removeTodo = (index, todos) => {
    const todosUpdated = [ ...todos ];
    todosUpdated.splice(index, 1);
    props.setTodos(todosUpdated);
  };

  return(
    <div 
      className="todo" 
      style={{ 
        textDecoration: props.todo.completed ? "line-through" : "",
        background: props.todo.completed ? "#e8e8e8" : "",
        boxShadow: "none"
      }}
    >
      { (props.index + 1) + '. ' + props.todo.text }
      <div>
        <button onClick={() => completeTodo(props.index, props.todos)}>
          { props.todo.completed ? 'Undo' : 'Mark done' }
        </button>
        <button className="delete" onClick={() => removeTodo(props.index, props.todos)}>X</button>
      </div>
    </div>
  );
}