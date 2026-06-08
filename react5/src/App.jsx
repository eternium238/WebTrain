// App.js
import React from 'react';
import ContactForm from './ContactForm';

function App() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '40px 20px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}> Контактная форма</h1>
      <ContactForm />
    </div>
  );
}

export default App;