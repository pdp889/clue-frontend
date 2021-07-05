import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './GameComponents/Board';
import Forms from './FormComponents/Forms';
import Header from './HeaderComponents/Header';
import AddMove from './GameComponents/addMove';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import AuthControl from "./AuthComponents/AuthControl";
import useToken from "./AuthComponents/useToken";
import useGameStarted from './AuthComponents/useGameStarted';
import './clueColors.css';


function App() {


  const { token, setToken } = useToken();
  const { message, setMessage } = useGameStarted();

  //If a user is not logged in (i.e. no token), the user cannot view anything besides the login and sign up links
  if(!token) {
    return (
    <div className='log-in-page bg-clue-secondary vh-100'>
      <div className='d-flex flex-row justify-content-center '>
        <AuthControl setToken={setToken} />       
      </div>
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
