import React from 'react';
import StockTable from './lab1/StockTable';
import Chessboard from './lab1/Chessboard';

function App() {
  return (
    <div>
      <h1>Stock Market Table</h1>
      <StockTable />
      
      <h1 style={{ marginTop: '50px' }}>Chessboard</h1>
      <Chessboard />
    </div>
  );
}

export default App;