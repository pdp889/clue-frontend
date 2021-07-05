import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../clueColors.css';
import './Header.css'

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
        console.log(dataReturn);
        if (!dataReturn.error) {
            console.log(dataReturn.message)
            props.setGameStarted(dataReturn)
        } else {
            alert(dataReturn.error)
        }
    }

    if (props.gameStarted){
        return(
            <div className="d-flex justify-content-between bg-clue-primary">
                <div className="d-flex padding-05">
                    <Link  className="text-decoration-none text-clue-primary margin-02 header-hover" to='/addMove'>
                        <div >Add Move</div>
                    </Link>
                    <Link className="text-decoration-none text-clue-primary margin-02 header-hover" to="/">
                        <div >Game Board</div>
                    </Link>
                </div>
                <div className="d-flex padding-05">
                    <div class="text-decoration-none text-clue-primary margin-02 header-hover" onClick={endGame}>End Game</div>
                    <div className="text-decoration-none text-clue-primary margin-02 header-hover" onClick={logOut}>Log Out</div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="d-flex justify-content-between bg-clue-primary">
                <div className="text-decoration-none text-clue-primary margin-02 header-hover" onClick={startGame}>Go to Game</div>
                <Link className="text-decoration-none text-clue-primary margin-02 header-hover" to="/">
                        <div >Forms</div>
                </Link>
                <div className="text-decoration-none text-clue-primary margin-02 header-hover" onClick={logOut}>Log Out</div>
            </div>
        )
    }



}