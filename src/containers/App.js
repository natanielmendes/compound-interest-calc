import React, { useEffect } from 'react';

import FutureValue from '../components/FutureValue';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Compound Interest Simulation"
  }, []);

  return (
    <div className="App">
      <FutureValue />
    </div>
  );
}

export default App;
