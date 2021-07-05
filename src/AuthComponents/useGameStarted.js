import { useState } from 'react';


// This component handles the saving a token in sessionStorage, and also assigns the token to the state in App.js
export default function useGameStarted() {

  const getGameStarted = () => {
    const startedString = sessionStorage.getItem('gameStarted');
    const gameStarted = JSON.parse(startedString);
    return gameStarted?.message
  };

  const [message, setMessage] = useState(getGameStarted());

  const saveMessage = (gameStartedMessage) => {
    sessionStorage.setItem('gameStarted', JSON.stringify(gameStartedMessage));
    setMessage(gameStartedMessage.message);
  };

  return {
    setMessage: saveMessage,
    message
  }
}