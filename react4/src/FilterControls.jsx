// FilterControls.js
import React from 'react';

const FilterControls = ({ filter, onFilterChange }) => {
  const styles = {
    container: {
      marginBottom: '20px',
      display: 'flex',
      gap: '10px'
    },
    button: {
      padding: '8px 16px',
      border: '1px solid #ddd',
      backgroundColor: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    activeButton: {
      backgroundColor: '#007bff',
      color: 'white',
      borderColor: '#007bff'
    }
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => onFilterChange('all')}
        style={{
          ...styles.button,
          ...(filter === 'all' ? styles.activeButton : {})
        }}
      >
        Все
      </button>
      <button
        onClick={() => onFilterChange('active')}
        style={{
          ...styles.button,
          ...(filter === 'active' ? styles.activeButton : {})
        }}
      >
        Активные
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        style={{
          ...styles.button,
          ...(filter === 'completed' ? styles.activeButton : {})
        }}
      >
        Выполненные
      </button>
    </div>
  );
};

export default FilterControls;