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
  const clueCard = {
    suspects: ['Mustard', 'Plum', 'Green', 'Peacock', 'Scarlet', 'White'],
    weapons: ['Knife', 'Candlestick', 'Revolver', 'Rope', 'Lead Pipe', 'Wrench'],
    rooms:['Hall', 'Lounge', 'Dining Room', 'Kitchen', 'Ballroom', 'Conservatory', 'Billiard Room', 'Library', 'Study'],
  };
  clueCard.allCards =[].concat(clueCard.suspects, clueCard.weapons, clueCard.rooms);

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
      <BrowserRouter basename={'/clue-frontend'}>
        <Header gameStarted={message} setGameStarted={setMessage} token={token} setToken={setToken}/>
        <Switch>
            <Route path='/' exact render={(props) => (
              <Board clueCard={clueCard} token={token} />
            )} />
            <Route path='/addMove' exact render={(props) => (
              <AddMove token={token} clueCard={clueCard}/>
            )} />
        </Switch>
      </BrowserRouter>
    )
  } else {

  return(
    <BrowserRouter basename={'/clue-frontend'}>
      <Header gameStarted={message} setGameStarted={setMessage} token={token} setToken={setToken}/>
      <Switch>
          <Route path='/' exact render={(props) => (
            <Forms token={token} clueCard={clueCard}/>
          )} />
      </Switch>
    </BrowserRouter>
  )

  }
}

export default App;
