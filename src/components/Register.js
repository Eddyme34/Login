import React, {useState} from 'react';
import UserPool from '../UserPool';

const Signup = () => {
    const [email, createEmail] = useState('');
    const [password, createPassword] = useState('');

    const Submit = event => {
      event.preventDefault();
      UserPool.signUp(email, password)
    }
  return (
    <div className = "inputField">
    <div className = "loginForm">
      <form onSubmit = {Submit}>
        <input className = 'input'
          value={email}
          onChange={event => createEmail(event.target.value)}//set email in input to new email
          />

        <input className = 'input'
          value = {password}
          onChange={event => createPassword(event.target.value)}//set password in input to new password
          />
          <button className = 'btn'>Sign Up</button> 
      </form>
      </div>
      </div>
  );
};

export default Signup;