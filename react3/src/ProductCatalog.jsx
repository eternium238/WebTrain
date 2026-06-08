import React, { useState } from 'react';

const ProductCatalog = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Ноутбук', price: 45000, quantity: 5 },
    { id: 2, name: 'Мышь', price: 1200, quantity: 0 },
    { id: 3, name: 'Клавиатура', price: 3500, quantity: 2 },
    { id: 4, name: 'Монитор', price: 18000, quantity: 3 },
    { id: 5, name: 'Наушники', price: 2500, quantity: 1 },
    { id: 6, name: 'Веб-камера', price: 3200, quantity: 0 },
    { id: 7, name: 'Микрофон', price: 2100, quantity: 4 }
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedProducts = () => {
    const sortedProducts = [...products];
    
    if (sortConfig.key !== null) {
      sortedProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return sortedProducts;
  };

  const getRowColor = (quantity) => {
    if (quantity === 0) return '#ffcccc';
    if (quantity < 3) return '#ffffcc';
    return 'white';
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return ' ↕';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  const sortedProducts = getSortedProducts();
  
  const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
  const totalCost = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    },
    th: {
      border: '1px solid #ddd',
      padding: '12px',
      backgroundColor: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
      textAlign: 'left'
    },
    td: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left'
    },
    summary: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Каталог товаров</h2>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th} onClick={() => handleSort('id')}>
              № строки{getSortIndicator('id')}
            </th>
            <th style={styles.th} onClick={() => handleSort('name')}>
              Название товара{getSortIndicator('name')}
            </th>
            <th style={styles.th} onClick={() => handleSort('price')}>
              Цена (₽){getSortIndicator('price')}
            </th>
            <th style={styles.th} onClick={() => handleSort('quantity')}>
              Количество{getSortIndicator('quantity')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => (
            <tr
              key={product.id}
              style={{ backgroundColor: getRowColor(product.quantity) }}
            >
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>{product.price.toLocaleString()} ₽</td>
              <td style={styles.td}>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={styles.summary}>
        <div> Общее количество товаров: <strong>{totalQuantity}</strong> шт.</div>
        <div> Общая стоимость: <strong>{totalCost.toLocaleString()} ₽</strong></div>
      </div>
      
      <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
        <div> Желтый фон - товары с количеством менее 3 шт.</div>
        <div> Красный фон - товары с нулевым количеством</div>
      </div>
    </div>
  );
};

export default ProductCatalog;