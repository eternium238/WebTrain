// ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gender: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submittedContacts, setSubmittedContacts] = useState([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен для заполнения';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Введите корректный email адрес';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно для заполнения';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Выберите пол';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newContact = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toLocaleString()
      };
      
      setSubmittedContacts(prev => [...prev, newContact]);
      
      setFormData({
        name: '',
        email: '',
        message: '',
        gender: ''
      });
      
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      gender: ''
    });
    setErrors({});
  };

  const styles = {
    container: {
      display: 'flex',
      gap: '30px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap'
    },
    formContainer: {
      flex: 1,
      minWidth: '300px',
      padding: '25px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    tableContainer: {
      flex: 1,
      minWidth: '400px',
      padding: '25px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      minHeight: '100px',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },
    radioGroup: {
      display: 'flex',
      gap: '20px',
      marginTop: '5px'
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      cursor: 'pointer'
    },
    error: {
      color: '#dc3545',
      fontSize: '14px',
      marginTop: '5px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px'
    },
    submitButton: {
      flex: 1,
      padding: '12px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    clearButton: {
      flex: 1,
      padding: '12px',
      backgroundColor: '#6c757d',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    successMessage: {
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#d4edda',
      color: '#155724',
      borderRadius: '5px',
      textAlign: 'center'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '15px'
    },
    th: {
      border: '1px solid #ddd',
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      textAlign: 'left'
    },
    td: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left'
    },
    emptyMessage: {
      textAlign: 'center',
      color: '#999',
      padding: '40px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Форма обратной связи</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Имя *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Введите ваше имя"
            />
            {errors.name && <div style={styles.error}>{errors.name}</div>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="example@domain.com"
            />
            {errors.email && <div style={styles.error}>{errors.email}</div>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Пол *</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Мужской
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Женский
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                Другой
              </label>
            </div>
            {errors.gender && <div style={styles.error}>{errors.gender}</div>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Сообщение *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Введите ваше сообщение (минимум 10 символов)"
            />
            {errors.message && <div style={styles.error}>{errors.message}</div>}
          </div>
          
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
            <button type="button" onClick={handleClear} style={styles.clearButton}>
              Очистить
            </button>
          </div>
          
          {submitSuccess && (
            <div style={styles.successMessage}>
              ✓ Форма успешно отправлена!
            </div>
          )}
        </form>
      </div>
      
      <div style={styles.tableContainer}>
        <h2 style={styles.title}>Отправленные контакты</h2>
        
        {submittedContacts.length === 0 ? (
          <div style={styles.emptyMessage}>
            Нет отправленных сообщений
          </div>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Имя</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Пол</th>
                <th style={styles.th}>Сообщение</th>
                <th style={styles.th}>Дата</th>
              </tr>
            </thead>
            <tbody>
              {submittedContacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{contact.name}</td>
                  <td style={styles.td}>{contact.email}</td>
                  <td style={styles.td}>
                    {contact.gender === 'male' && 'Мужской'}
                    {contact.gender === 'female' && 'Женский'}
                    {contact.gender === 'other' && 'Другой'}
                  </td>
                  <td style={styles.td}>{contact.message}</td>
                  <td style={styles.td}>{contact.submittedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ContactForm;