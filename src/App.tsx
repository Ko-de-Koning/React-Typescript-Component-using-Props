import React from 'react';
import './App.css';
import NewComponent from './NewComponent';

function App() {
  const age = 42;
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NewComponent name="Bill" age={age} isOlderThanForty={age > 40} />
    </div>
  );
} 

export default App;
