import React from 'react';
import EmailForm from './EmailForm';
import ProductCatalog from './ProductCatalog';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Лабораторная работа №3</h1>
      
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Задание 1: Форма отправки email</h2>
        <EmailForm />
      </section>
      
      <section>
        <h2 style={{ textAlign: 'center' }}>Задание 2: Каталог товаров</h2>
        <ProductCatalog />
      </section>
    </div>
  );
}

export default App;