import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <div className="App">
      <h1>API results:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;