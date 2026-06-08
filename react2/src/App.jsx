import React from 'react';
import Clock from './Clock';
import JobMenu from './JobMenu';

function App() {
  return (
    <div>
      <h1>Задание 1: Часы</h1>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '50px' }}>
        <div>
          <h3>Минское время (24h, +3:00)</h3>
          <Clock format='24' timezone='+3:00' />
        </div>
        <div>
          <h3>Нью-Йорк (12h, -4:00)</h3>
          <Clock format='12' timezone='-4:00' />
        </div>
        <div>
          <h3>Системное время (24h)</h3>
          <Clock format='24' />
        </div>
      </div>

      <h1>Задание 2: JobMenu</h1>
      <JobMenu />
    </div>
  );
}

export default App;