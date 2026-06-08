// ToDoList.js
import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';
import FilterControls from './FilterControls';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);
  const [showList, setShowList] = useState(false);
  const [filter, setFilter] = useState('all');

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSubmit = () => {
    setShowList(true);
    applyFilter(tasks);
  };

  const applyFilter = (taskList) => {
    let filtered = taskList;
    if (filter === 'active') {
      filtered = taskList.filter(task => !task.completed);
    } else if (filter === 'completed') {
      filtered = taskList.filter(task => task.completed);
    }
    setDisplayTasks(filtered);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    let filtered = tasks;
    if (newFilter === 'active') {
      filtered = tasks.filter(task => !task.completed);
    } else if (newFilter === 'completed') {
      filtered = tasks.filter(task => task.completed);
    }
    setDisplayTasks(filtered);
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px'
    },
    submitButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px'
    },
    emptyMessage: {
      textAlign: 'center',
      color: '#999',
      padding: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ToDo List</h2>
      <ToDoForm onAdd={addTask} />
      <button onClick={handleSubmit} style={styles.submitButton}>
        Submit
      </button>
      
      {showList && tasks.length > 0 && (
        <>
          <FilterControls filter={filter} onFilterChange={handleFilterChange} />
          <ToDoItems items={displayTasks} onToggle={toggleTask} />
        </>
      )}
      
      {showList && tasks.length === 0 && (
        <div style={styles.emptyMessage}>
          Нет добавленных задач. Добавьте первую задачу!
        </div>
      )}
    </div>
  );
};

export default ToDoList;