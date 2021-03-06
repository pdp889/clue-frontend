import React, { useState } from 'react';
import '../clueColors.css';

// this is an async function which signs up a user. It is called in the handleSubmit function which is called when a user clicks sign up.
async function signUser(credentials) {
 return fetch('https://smart-clue-backend.herokuapp.com/createNewUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
   .then(data => data.json())
   .catch(err => console.log(err));
}

export default function SignUp(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signUser({
      username,
      password
    });
    if (token.error){
      setMessage(token.error);
    } 
    props.setToken(token);
    console.log(token);
  }


  return(
    <div className="login-signup bg-clue-primary text-clue-primary w-100">
      <div className='d-flex justify-content-between'>
      <h3>Sign Up</h3>
      <button className="btn btn-outline-link text-clue-primary" onClick={props.toggle}>Back</button>
    </div>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
          <input type="text" name='username' className='form-control' onChange={e => setUserName(e.target.value)} />
        <label htmlFor='password'>Password</label>
          <input type="password" className='form-control' onChange={e => setPassword(e.target.value)} />
      </div>
      
      <div className='login-signup-button'>
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
    <div className="text-danger">
      {message}
    </div>
  </div>
)
}