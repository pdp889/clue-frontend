import { useState } from "react";
import './forms.css';
import ClueForm from "./ClueForm";
import '../clueColors.css';

export default function UserForm (props) {
    
    const [showCards, setShowCards] = useState(true);
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const [userNumberCards, setUserNumberCards] = useState(0);

    const allCardsObj = {};
    props.clueCard.allCards.forEach(x => {
        allCardsObj[x] = -1;
    });
    const [trackingObj, setTrackingObj] = useState(allCardsObj);
       
    const getArrayFromForm = (clueBoardObj) => {
        
        let copy = {};
        props.clueCard.allCards.forEach(card => {
            copy[card] = ((clueBoardObj[card]) ? 1 : -1);
        });
        setTrackingObj(copy);
        setShowCards(false);
    }

    const onSubmitTask = (event) => {
        event.preventDefault();
        sendData(); 
    }

    const toggleShowCards = () => {
        setShowCards(!showCards);
    }

    const sendData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ name: name, tracking_obj: trackingObj, is_user_player: "true", number_cards: userNumberCards})
        }
        fetch('https://smart-clue-backend.herokuapp.com/addPlayer', requestOptions)
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
                setName('');
                setTrackingObj({});
                setShowCards(true);
                props.refresh();
            }
        })
    }
   
    if (showCards){
        return (
            <div className="card bg-clue-secondary">
                <div className='card-body'>
                    <h1>Add User Cards</h1>
                    <ClueForm arrayFromForm={getArrayFromForm} clueCard={props.clueCard} setUserNumberCards={setUserNumberCards}/>
                </div>
                {errors}
            </div>
        )
    } else {
        return (
            <div className="card bg-clue-secondary">
                <button onClick={toggleShowCards}>Change cards</button>
                <div className='card-body'>
                    <h1>Add User Information</h1>
                    <form onSubmit ={e => {onSubmitTask(e)}}>
                        <label htmlFor='name'>Nickname (6 Characters or Less)</label>
                        <input
                            onChange={e => setName(e.target.value)}
                            type='text'
                            name='name'
                            className='form-control'
                            autoComplete='off'
                            maxLength='6'
                            value={name}
                        />
                        <input type="submit" className="btn btn-primary record-submit" value="Add User" />
                    </form>
                </div> 
                {errors}
            </div>
        )
    }
    
}