import { useState } from "react";
import './forms.css'
import ClueForm from "./ClueForm";
import '../clueColors.css';

export default function UserForm (props) {
    
    const [showCards, setShowCards] = useState(true);
    const [message, setMessage] = useState('cards not loaded');
    const [name, setName] = useState('');
    const [trackingArray, setTrackingArray] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);
    const [numberCards, setNumberCards] = useState(0);
    const [errors, setErrors] = useState([]);
    
    const getArrayFromForm = (trueFalseArray) => {
        let copy = [];
        for (let i = 0; i<trueFalseArray.length; i++){
            if (trueFalseArray[i] === true){
                copy.push(1);
            } else {
                copy.push(-1);
            }
        }
        setTrackingArray(copy);
        setShowCards(false);
        setMessage('cards loaded');
    }

    const onSubmitTask = (event) => {
        event.preventDefault();
        sendData();
        
    }

    const toggleShowCards = () => {
        if (showCards === true){
            setShowCards(false)
        } else {
            setShowCards(true)
        }
    }

    const sendData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ name: name, tracking_array: trackingArray, number_cards: numberCards})
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
                setTrackingArray([]);
                setNumberCards(0);
                setShowCards(true);
                setMessage('');
                props.refresh();
            }
        })
    }
   
    if (showCards){
        return (
            <div className="card bg-clue-secondary">
                <div className='card-body'>
                    <h1>Add User Cards</h1>
                    <ClueForm arrayFromForm={getArrayFromForm}/>
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
                        <label htmlFor='name'>Name</label>
                        <input
                            onChange={e => setName(e.target.value)}
                            type='text'
                            name='name'
                            className='form-control'
                            autoComplete='off'
                            value={name}
                        />
                        <label htmlFor='cardsNumber'>Number of Cards</label>
                        <input
                            onChange={e => setNumberCards(e.target.value)}
                            type='number'
                            name='cardsNumber'
                            className='form-control'
                            autoComplete='off'
                            value={numberCards}
                            min='1'
                            max='6'
                        />
                        <input type="submit" className="btn btn-primary record-submit" value="Add User" />
                    </form>
                </div> 
                {errors}
            </div>
        )
    }
    
}