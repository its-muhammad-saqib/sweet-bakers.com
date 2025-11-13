import { useState } from 'react';
import Homepage from './components/homepage';
import Admin from './components/admin';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      <button
        onClick={() => setShowAdmin(!showAdmin)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#4B2C20',
          color: '#FFF',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 9999,
        }}
        title={showAdmin ? 'View Website' : 'Admin Panel'}
      >
        {showAdmin ? '🏠' : '⚙️'}
      </button>
      {showAdmin ? <Admin /> : <Homepage />}
    </div>
  );
}

export default App;