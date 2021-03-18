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
    <div>
      <form onSubmit = {Submit}>
        <input
          value={email}
          onChange={event => createEmail(event.target.value)}//set email in input to new email
          />

        <input
          value = {password}
          onChange={event => createPassword(event.target.value)}//set password in input to new password
          />
          <button type = 'submit'>Sign Up</button> 
      </form>
      </div>//clicking 'submit' runs the onSubmit function
  );
};

export default Signup;