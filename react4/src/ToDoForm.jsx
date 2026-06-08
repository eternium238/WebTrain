// ToDoForm.js
import React, { useState } from 'react';

const ToDoForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName.trim());
      setTaskName('');
    }
  };

  const styles = {
    form: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    },
    input: {
      flex: 1,
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Введите название задачи..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add
      </button>
    </form>
  );
};

export default ToDoForm;