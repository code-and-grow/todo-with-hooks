import React from 'react';

export default function Todo(props) {

  const completeTodo = (index, todos) => {
    const todosUpdated = [ ...todos ];
    todosUpdated[index].completed = true;
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
        <button onClick={() => completeTodo(props.index, props.todos)}>Done</button>
      </div>
    </div>
  );
}