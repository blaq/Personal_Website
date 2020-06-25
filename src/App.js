import React from 'react';
import pic from './my-pic.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="col">
            <img src={pic} class="pic" alt="picture of myself" />
        </div>
        <div class="col">
            <h1>Ethan Black</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
