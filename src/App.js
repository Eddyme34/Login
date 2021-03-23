import React from 'react';
import {Account} from './components/Accounts';
import Register from './components/Register';
import Login from './components/Login';
import Status from './components/Status';
import './App.css';

const App = () => {

  return (
    <div className="app">
      <div className="container">
    <Account>
      <Status />
      <Register />
      <Login />
      </Account>
      </div>
      </div>
  );
};

export default App;