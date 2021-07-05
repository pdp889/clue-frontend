import { useState } from "react";
import './forms.css';
import '../clueColors.css';

export default function OpponentForm (props) {
    
    
    const [name, setName] = useState('');
    const trackingArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const [numberCards, setNumberCards] = useState(0);
    const [errors, setErrors] = useState([]);
    


    const onSubmitTask = (event) => {
        event.preventDefault();

        sendData();
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
                setNumberCards(0);
                props.refresh();
            }
        })
    }
   
    return (
        <div className="card bg-clue-secondary">
            <div className='card-body'>
                <h1>Add Opponent</h1>
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
                    <input type="submit" className="btn btn-primary record-submit" value="Add Opponent" />
                </form>
            </div> 
            {errors}
        </div>
    )
}