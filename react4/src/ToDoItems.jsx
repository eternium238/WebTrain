// ToDoItems.js
import React from 'react';

const ToDoItems = ({ items, onToggle }) => {
  const styles = {
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    item: {
      padding: '12px',
      marginBottom: '8px',
      backgroundColor: '#f9f9f9',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    checkbox: {
      width: '20px',
      height: '20px',
      cursor: 'pointer'
    },
    label: {
      fontSize: '16px',
      cursor: 'pointer',
      flex: 1
    },
    completed: {
      textDecoration: 'line-through',
      color: '#999'
    }
  };

  return (
    <ul style={styles.list}>
      {items.map((item) => (
        <li key={item.id} style={styles.item}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
            style={styles.checkbox}
          />
          <label
            style={{
              ...styles.label,
              ...(item.completed ? styles.completed : {})
            }}
            onClick={() => onToggle(item.id)}
          >
            {item.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ToDoItems;