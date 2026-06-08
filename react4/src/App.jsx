// App.js
import React from 'react';
import ToDoList from './ToDoList';

function App() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '40px 20px'
    }
  };

  return (
    <div style={styles.container}>
      <ToDoList />
    </div>
  );
}

export default App;