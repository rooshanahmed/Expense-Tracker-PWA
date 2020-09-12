import React from 'react';
import './App.css';
import Balance from './Components/Balance';
import Header from './Components/Header';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Balance />
    </div>
  );
}

export default App;
