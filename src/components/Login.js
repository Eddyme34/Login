import React, {useState, useContext} from 'react';
import {AccountContext} from './Accounts';

const Login = () => {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const {authenticate} = useContext(AccountContext);

    const submit = event => {
      event.preventDefault();
      authenticate(email,password)
    }
  return (
   <div className = "inputField">
    <div className = "loginForm">
      <form onSubmit = {submit}>
        <input className = 'input'
          value={email}
          onChange={event => getEmail(event.target.value)}
          />
        <input className='input'
          value = {password}
          onChange={event => getPassword(event.target.value)}
          />
          <button className = 'btn'>Login</button>
      </form>
      </div>
      </div> 
  );
};

export default Login;