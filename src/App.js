import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './GameComponents/Board';
import Forms from './FormComponents/Forms';
import Header from './Header';
import AddMove from './FormComponents/addMove';
import Summary from './GameComponents/Summary'
import {BrowserRouter, Switch, Route } from "react-router-dom";
import AuthControl from "./AuthComponents/AuthControl";
import useToken from "./AuthComponents/useToken";
import useGameStarted from './AuthComponents/useGameStarted';
import { useState } from 'react';


function App() {


  const { token, setToken } = useToken();
  const { message, setMessage } = useGameStarted();

  //If a user is not logged in (i.e. no token), the user cannot view anything besides the login and sign up links
  if(!token) {
    return (
    <div className='row log-in-page'>
      <div className='col'/>
      <div className='col log-in-column justify-content-space-around'>
        <AuthControl setToken={setToken} />       
      </div>
      <div className='col' />
    </div>
    )
  }

  if (message){
    return(
      <BrowserRouter>
        <Header gameStarted={message} setGameStarted={setMessage} token={token} setToken={setToken}/>
        <Switch>
            <Route path='/' exact render={(props) => (
              <Board token={token} />
            )} />
            <Route path='/addMove' exact render={(props) => (
              <AddMove token={token} />
            )} />
        </Switch>
      </BrowserRouter>
    )
  } else {

  return(
    <BrowserRouter>
      <Header gameStarted={message} setGameStarted={setMessage} token={token} setToken={setToken}/>
      <Switch>
          <Route path='/' exact render={(props) => (
            <Forms token={token} />
          )} />
      </Switch>
    </BrowserRouter>
  )

  }
}

export default App;
