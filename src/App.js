import React from 'react'
import profileImage from './img/javier.jpeg'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My react App</h1>
      <h2>Autor: Javier Gómez</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
