import React from 'react';
import pic from './my-pic.svg';
import './App.css';
import axios from 'axios';

const profile = { name: "ethan" };

function Profile(props) {
  var here = axios.get('assets/profile.json');
console.log(here.value);
  return (
    <p>Name : </p>
  )
}

function App() {
  return (
  <div className="profile">
    <div class="col">
        <img src={pic} class="pic" alt="picture of myself" />
    </div>
    <Profile name={profile.name} />
  </div>
);
}

export default App;
