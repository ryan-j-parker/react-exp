import { useState } from 'react';
import './App.css';
import Battle from './components/Battle/Battle';
import Start from './components/Start/Start';

function App() {
  const [mode, setMode] = useState('start');

  return (
    <div className="App">
      {mode === 'start' && <Start onStartClick={() => setMode('battle')}>Start Menu</Start>}
      {mode === 'battle' && <Battle />}
      {mode === 'gameOver' && <>Game Over</>}
    </div>
  );
}

export default App;
