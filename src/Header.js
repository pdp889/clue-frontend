import { Link} from "react-router-dom";
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
            <div className="d-flex justify-content-between">
                <div>
                    <Link to='/addMove'>
                        <button>Add Move</button>
                    </Link>
                    <Link to="/">
                        <button>Game Board</button>
                    </Link>
                </div>
                <div>
                    <button onClick={endGame}>End Game</button>
                    <button className="text-white btn btn-primary" onClick={logOut}>Log Out</button>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <button onClick={startGame}>Go to Game</button>
                <button className="text-white btn btn-primary" onClick={logOut}>Log Out</button>
            </div>
        )
    }



}