import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {

  const [todos, setTodos] = React.useState([
    { 
      text: "Learn React hooks",
      completed: false
    },
    { 
      text: "Build a todo app",
      completed: false 
    },
    { 
      text: "Have some Crystal",
      completed: false 
    },
  ]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>To Do <em><small>or</small></em> Not To Do</h1>
      </header>
      <main>
        <div className="todo-list">
          {todos && 
            todos.map((todo, i) => {
              return(
                <Todo 
                  key={ i } 
                  index={ i } 
                  todos={ todos }
                  todo={ todo }
                  setTodos={ setTodos }
                />
              )
            })
          }
          <TodoForm
            todos={ todos }
            setTodos={ setTodos }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
