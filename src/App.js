import React from 'react';
import {Account} from './components/Accounts';
import Register from './components/Register';
import Login from './components/Login';
import Status from './components/Status';

const App = () => {

  return (
    <Account>
      <Status />
      <Register />
      <Login />
      </Account>
  );
};

export default App;