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
    <div>
      <form onSubmit = {submit}>
        <input
          value={email}
          onChange={event => getEmail(event.target.value)}
          />

        <input
          value = {password}
          onChange={event => getPassword(event.target.value)}
          />
          <button type = 'submit'>Login</button>
      </form>
      </div>
  );
};

export default Login;