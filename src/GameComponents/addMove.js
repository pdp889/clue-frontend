import { useEffect, useState } from "react";
import ClueForm from "../FormComponents/ClueForm";
import "../FormComponents/forms.css";
import '../clueColors.css';

export default function AddMove (props) {
    
    const [showCards, setShowCards] = useState(true);
    const [message, setMessage] = useState('cards not loaded');
    const [allPlayers, setAllPlayers] = useState([{}]);
    const [player, setPlayer] = useState('');
    const [request, setRequest] = useState([]);
    const [cardShown, setCardShown] = useState('Unknown');
    const [allNo, setAllNo] = useState(false);
    const [errors, setErrors] = useState([]);
    const clueBreakdown = {};
    props.clueCard.allCards.forEach(x => {
        clueBreakdown[x] = null;
    });

    useEffect(()=>{
        fetchItems();
    },[])

    const fetchItems = async () => {
        const data = await fetch ('https://smart-clue-backend.herokuapp.com/board', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        });
        const dataReturn = await data.json();
        let playerInfos = [];
        Array.from(dataReturn).forEach(item => {
            let objItem = {
                id: item._id,
                name: item.name,
                numberCards: item.number_cards
            };
            playerInfos.push(objItem);
        });
        setAllPlayers(playerInfos);
    }

    const onSelectChange = (event) => {
        setPlayer(event.target.value);
    }

    const onAllNoChange = (event) => {
        setAllNo(event.target.value);
    }

    const onCardShownChange = (event) => {
        setCardShown(event.target.value);
    }

    const clueFormResultHandler = (clueObj) => {
        let workingRequest = [];
        props.clueCard.allCards.forEach( x => {
            if(clueObj[x]){
                //pushing the name the of the card
                workingRequest.push(x);
            }
        });
        setRequest(workingRequest);
        toggleShowCards();
        setMessage('cards loaded');
    }

    const toggleShowCards = () => {
        setShowCards(!showCards)
    }


    const sendData = () => {
        if (player===""){
            setErrors('player not selected');
        } else {
            if(!(allNo && cardShown!=="Unknown")){
                           
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + props.token },
                body: JSON.stringify({ playerId: player, request: request, cardshown: cardShown, all_no: allNo})        }
                fetch('https://smart-clue-backend.herokuapp.com/addMove', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.errors !== undefined){
                        let array = Array.from(data.errors);
                        let errorArray = [];
                        array.forEach(item => {
                            errorArray.push(item.msg + "; ")
                        })
                        setErrors(errorArray)
                    } else {
                        setPlayer('');
                        setRequest([]);
                        setCardShown('Unknown');
                        setAllNo(false);
                        setShowCards(true);
                        setMessage('');
                    }
                })
            }
            else {
                alert("You selected a card value and noted that no card was shown to you. This will not be submitted.")
                window.location.reload();
            }
        }
    }


    const onSubmitTask = (event) => {
        event.preventDefault();
        sendData();
    }

    if (showCards){
       return(
           <div className="card bg-clue-secondary vw-100 vh-96 padding-2">
               <h2>What was the suggestion made?</h2>
               <ClueForm arrayFromForm={clueFormResultHandler} clueCard={props.clueCard}/>
           </div>
            
       ) 
    } else {
        return (
            <div className="w-50 bg-clue-secondary vh-96 vw-100 padding-2">
                <div className="d-flex justify-content-between">
                    <h2>Suggestion Details</h2>
                    <button className="btn btn-outline-link" onClick={toggleShowCards}>Change cards?</button>
                </div>
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <label htmlFor='player'>Player</label>
                    <select name="player" value={player} className="form-select" onChange={onSelectChange}>
                       <option></option> 
                       {allPlayers.map((value, index) => {
                            return <option key={index} value={value.id}>{value.name}</option>
                        })}
                    </select>
                    <label htmlFor='allno'>All No?</label>
                    <select name="allno" className="form-select" value={allNo} onChange={onAllNoChange}>
                        <option  value={true}>true</option>
                        <option  value={false}>false</option>
                    </select>
                
                <label htmlFor='cardShown'>Card Shown</label>
                    <select name="cardShown" className="form-select" value={cardShown} onChange={onCardShownChange}>
                        <option value={'Unknown'}>Unknown</option>
                        {props.clueCard.allCards.map((value, index) => {
                            return <option key={index} value={value}>{value}</option>
                        })}
                    </select>
                    <input type="submit" className="btn btn-primary record-submit" value="Add Move" />
                </form>
                {errors}
            </div>
        )
    }
    
}