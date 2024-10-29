// src/components/TodoList.js
import React, { useState } from 'react';

function TodoList() {
    // Get today's date
    const today = new Date().toLocaleDateString();

    // State for new task input
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('urgent-important');

    // State for tasks in each category
    const [tasks, setTasks] = useState({
        'urgent-important': [],
        'not-urgent-important': [],
        'urgent-not-important': [],
        'not-urgent-not-important': []
    });

    // Add a task to the selected category with a due date
    const addTask = () => {
        if (task && dueDate) {
            const newTask = { text: task, dueDate: dueDate, completed: false };
            setTasks({
                ...tasks,
                [category]: [...tasks[category], newTask]
            });
            setTask('');
            setDueDate('');
        }
    };

    // Toggle the completed status of a task
    const toggleCompleted = (cat, index) => {
        const updatedTasks = tasks[cat].map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks({ ...tasks, [cat]: updatedTasks });
    };

    // Remove a task from a specific category
    const removeTask = (cat, index) => {
        setTasks({
            ...tasks,
            [cat]: tasks[cat].filter((_, i) => i !== index)
        });
    };

    return (
        <div>
            <h2>Organize Your To-Do List (Eisenhower Matrix)</h2>
            <p>Today's Date: {today}</p> {/* Display today's date */}
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Enter a task" 
            />
            <input 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
                placeholder="Due Date" 
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="urgent-important">Urgent & Important</option>
                <option value="not-urgent-important">Not Urgent but Important</option>
                <option value="urgent-not-important">Urgent but Not Important</option>
                <option value="not-urgent-not-important">Neither Urgent nor Important</option>
            </select>
            <button onClick={addTask}>Add Task</button>

            <div className="eisenhower-matrix">
                {Object.keys(tasks).map((catKey, index) => (
                    <div key={index} className="box">
                        <h3>{catKey.replace(/-/g, ' ')}</h3>
                        <ul>
                            {tasks[catKey].map((task, i) => (
                                <li key={i} className={task.completed ? 'completed' : ''}>
                                    <input 
                                        type="checkbox" 
                                        checked={task.completed} 
                                        onChange={() => toggleCompleted(catKey, i)} 
                                    />
                                    <span>{task.text}</span> - 
                                    <span className="due-date">Due: {task.dueDate}</span>
                                    <button className="remove-btn" onClick={() => removeTask(catKey, i)}>x</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
