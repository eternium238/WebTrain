import React from 'react';

const Chessboard = () => {
  const renderBoard = () => {
    const board = [];
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
    
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        const isBlack = (i + j) % 2 === 1;
        row.push(
          <div
            key={`${i}-${j}`}
            className={isBlack ? 'black' : 'white'}
            style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
          </div>
        );
      }
      board.push(
        <div key={i} style={{ display: 'flex' }}>
          <div className="rank-label" style={{
            width: '30px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            {ranks[i]}
          </div>
          {row}
        </div>
      );
    }
    return board;
  };

  return (
    <div style={{ display: 'inline-block', padding: '20px' }}>
      <div style={{ marginLeft: '30px', display: 'flex', marginBottom: '5px' }}>
        <div style={{ width: '30px' }}></div>
        {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(file => (
          <div
            key={file}
            style={{
              width: '60px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            {file}
          </div>
        ))}
      </div>
      {renderBoard()}
    </div>
  );
};

const styles = document.createElement('style');
styles.textContent = `
  .black {
    background-color: #769656;
  }
  .white {
    background-color: #eeeed2;
  }
`;
document.head.appendChild(styles);

export default Chessboard;