// src/App.js
import React from 'react';
import './App.css';
import TodoList from './components/ToDoList';
import RandomFact from './components/RandomFact';

function App() {
    return (
        <div className="App">
            <h1>To-Do List with Daily Fact</h1>
            <RandomFact />
            <TodoList />
        </div>
    );
}

export default App;
