import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../clueColors.css';
import './Header.css';

export default function Header (props) {
    
    const logOut = () => {
        sessionStorage.clear();
        props.setToken('');
    }

    const endGame = async () => {
        const data = await fetch ('https://smart-clue-backend.herokuapp.com/endGame', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + props.token },
        });
        const dataReturn = await data.json();
        props.setGameStarted(false);
        
    }

    const startGame = async () => {
        const data = await fetch ('https://smart-clue-backend.herokuapp.com/startGame', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + props.token },
        });
        const dataReturn = await data.json();
        if (!dataReturn.error) {
            props.setGameStarted(dataReturn)
        } else {
            alert(dataReturn.error)
        }
    }

    if (props.gameStarted){
        return(
            <div className="d-flex justify-content-between bg-clue-primary header">
                <div className="d-flex padding-05 min-width-300">
                    <Link  className="text-decoration-none text-clue-primary margin-02 header-hover min-width-150" to='/addMove'>
                        <div className="header-word-div" >Add Move</div>
                    </Link>
                    <Link className="text-decoration-none text-clue-primary margin-02 header-hover min-width-150" to="/">
                        <div className="header-word-div">Game Board</div>
                    </Link>
                </div>
                <div className="d-flex padding-05 min-width-300">
                    <div className="text-decoration-none text-clue-primary margin-02-right header-hover min-width-150" onClick={endGame}><div className="header-word-div">End Game</div></div>
                    <div className="text-decoration-none text-clue-primary margin-02-right header-hover min-width-150" onClick={logOut}><div className="header-word-div">Log Out</div></div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="d-flex justify-content-between bg-clue-primary header">
                <div className="text-decoration-none text-clue-primary margin-02 header-hover min-width-150" onClick={startGame}>Go to Game</div>
                <Link className="text-decoration-none text-clue-primary margin-02 header-hover min-width-150" to="/">
                        <div >Forms</div>
                </Link>
                <div className="text-decoration-none text-clue-primary margin-02 header-hover min-width-150" onClick={logOut}><div className="header-word-div">Log Out</div></div>
            </div>
        )
    }



}