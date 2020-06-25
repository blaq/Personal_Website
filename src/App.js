import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import picture from './my_picture.svg';

function App() {
  return (
    <div className="App" class="container">
      <div class="col">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          Ethan Black
        </header>
      </div>
      <div class="col">
        <div class="card">
          <img class="rounded img-fluid img-thumbnail" src={picture} alt="Picture of myself" />
        </div>
      </div>
    </div>
  );
}

export default App;
