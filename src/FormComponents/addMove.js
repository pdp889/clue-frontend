import { useEffect, useState } from "react";
import ClueForm from "./ClueForm"

export default function AddMove (props) {
    
    const [showCards, setShowCards] = useState(true);
    const [message, setMessage] = useState('cards not loaded');
    const [allPlayers, setAllPlayers] = useState([[]]);
    const [player, setPlayer] = useState('');
    const [request, setRequest] = useState([]);
    const [cardShown, setCardShown] = useState(-1);
    const [allNo, setAllNo] = useState(false);
    const [errors, setErrors] = useState([]);

    let clueBreakdown = [
        [
            'Mustard',
            null
        ],
        [
            'Plum',
            null
        ],
        [
            'Green',
            null
        ],
        [
            'Peacock',
            null
        ],
        [
            'Scarlet',
            null
        ],
        [
            'White',
            null
        ],
        [
            'Knife',
            null
        ],
        [
            'Candlestick',
            null
        ],
        [
           'Revolver',
            null
        ],
        [
           'Rope',
            null
        ],
        [
            'Lead Pipe',
            null
        ],
        [
            'Wrench',
            null
        ],
        [
            'Hall',
             null
        ],
        [
           'Lounge',
            null
        ],
        [
            'Dining Room',
            null
        ],
        [
            'Kitchen',
            null
        ],
        [
            'Ballroom',
            null
        ],
        [
            'Conservatory',
            null
        ],
        [
            'Billiard Room',
            null
        ],
        [
            'Library',
            null
        ],
        [
            'Study',
            null
        ]
    ]

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
            let arrayedItem = [item._id, item.name, item.number_cards]
            playerInfos.push(arrayedItem);
        })
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

    const clueFormResultHandler = (array) => {
        let workingRequest = [];
        for (let i = 0; i < array.length; i++){
            if(array[i] === true){
                workingRequest.push(i)
            }
        }
        setRequest(workingRequest);
        toggleShowCards();
        setMessage('cards loaded');
    }

    const toggleShowCards = () => {
        if (showCards === true){
            setShowCards(false)
        } else {
            setShowCards(true)
        }
    }


    const sendData = () => {

        const toSend = JSON.stringify({ playerId: player, request: request, cardshown: cardShown, all_no: allNo})
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ playerId: player, request: request, cardshown: cardShown, all_no: allNo})        }
        console.log(toSend);

        fetch('https://smart-clue-backend.herokuapp.com/addMove', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.errors !== undefined){
                let array = Array.from(data.errors);
                let errorArray = [];
                array.forEach(item => {
                    errorArray.push(item.msg + "; ")
                })
                setErrors(errorArray)
            } else {
                alert(data.message);
                setPlayer('');
                setRequest([]);
                setCardShown(-1);
                setAllNo(false);
                setShowCards(true);
                setMessage('');
            }
        })
    }


    const onSubmitTask = (event) => {
        event.preventDefault();
        sendData();

    }

    if (showCards){
       return(
           <div>
               <h2>What was the suggestion made?</h2>
               <ClueForm arrayFromForm={clueFormResultHandler} />
           </div>
            
       ) 
    } else {
        return (
            <div className="w-50">
                <div className="d-flex justify-content-between">
                    <h2>Suggestion Details</h2>
                    <button className="btn btn-outline-link" onClick={toggleShowCards}>Change cards?</button>
                </div>
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <label htmlFor='player'>Player</label>
                    <select name="player" value={player} className="form-select" onChange={onSelectChange}>
                       <option></option> 
                       {allPlayers.map((value, index) => {
                            return <option key={index} value={value[0]}>{value[1]}</option>
                        })}
                    </select>
                    <label htmlFor='allno'>All No?</label>
                    <select name="allno" className="form-select" value={allNo} onChange={onAllNoChange}>
                        <option  value={true}>true</option>
                        <option  value={false}>false</option>
                    </select>
                
                <label htmlFor='cardShown'>card shown</label>
                    <select name="cardShown" className="form-select" value={cardShown} onChange={onCardShownChange}>
                        <option value={-1}>Unknown</option>
                        {clueBreakdown.map((value, index) => {
                            return <option key={index} value={index}>{value[0]}</option>
                        })}
                    </select>
                    <input type="submit" className="btn btn-primary record-submit" value="Add Move" />
                </form>
                
            </div>
        )
    }
    
}