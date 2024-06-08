import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <div className='header'>
        <h1>My Day</h1>
        <p>{dateString}</p>
      </div>
      <div className='todo-app'>
        <TodoList />
      </div>
    </>
  );
}

export default App;
