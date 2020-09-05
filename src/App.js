import React from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {

  const [todos, setTodos] = React.useState([
    { text: "Learn React hooks" },
    { text: "Build a todo app" },
    { text: "Have some Crystal" },
  ]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>(: To Do || Not To Do :)</h1>
      </header>
      <main className="todo-list">
        {todos && 
          todos.map((todo, i) => {
            return(
              <Todo 
                key={ i } 
                index={ i } 
                text={ todo.text }
              />
            )
          })
        } 
      </main>
    </div>
  );
}

export default App;
