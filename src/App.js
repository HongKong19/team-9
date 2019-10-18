import React from 'react';
import logo from './logo.svg';
import './App.css';
import  "./views/login";
import SignIn from './views/login';

function App() {
  return (
    <div className="App">
    <login/>
      <header className="App-header">

        <SignIn/>
      </header>
    </div>
  );
}

export default App;
