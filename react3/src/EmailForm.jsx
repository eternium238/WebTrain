import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Пожалуйста, введите email адрес');
      setMessageType('error');
      return;
    }
    
    if (validateEmail(email)) {
      setMessage(`Письмо успешно отправлено на адрес ${email}`);
      setMessageType('success');
      setEmail('');
    } else {
      setMessage('Ошибка: Неверный формат email адреса');
      setMessageType('error');
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    formGroup: {
      marginBottom: '15px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px'
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    success: {
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#d4edda',
      color: '#155724',
      borderRadius: '4px'
    },
    error: {
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      borderRadius: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email адрес:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="example@domain.com"
          />
        </div>
        <button type="submit" style={styles.button}>
          Отправить
        </button>
      </form>
      {message && (
        <div style={messageType === 'success' ? styles.success : styles.error}>
          {message}
        </div>
      )}
    </div>
  );
};

export default EmailForm;