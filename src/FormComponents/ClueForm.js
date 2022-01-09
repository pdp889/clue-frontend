import { useState } from "react";
import '../clueColors.css';

// This component generates the clue form used to input the user's cards.

export default function ClueForm (props) {
    
    const allCardsObj = {};
    props.clueCard.allCards.forEach(x => {
        allCardsObj[x] = false;
    });
    
    const [formObj, setFormObject] = useState(allCardsObj)

    const onSubmitTask = (event) => {
        event.preventDefault();
        let count = 0;
        props.clueCard.allCards.forEach(card => {
            if (formObj[card]){
                count++;
            }
        });
        if (props.setUserNumberCards){
            props.setUserNumberCards(count);

        }
        props.arrayFromForm(formObj);
    }

    const toggleByKey = (key) => {
        let copy = Object.assign({}, formObj);
        copy[key] = !copy[key];
        setFormObject(copy);
    }

    const getCheckboxes = (array) => {
        return (array.map((value, index) => 
        <div className="form-check">
            <label htmlFor={value}>{value}</label>
            <input
                onChange={e => toggleByKey(value)}
                type='checkbox'
                name={value}
                key={value+""+19*index}
                className="form-check-input"
                value={formObj[{value}]}
            />
        </div> 
    ));
    }

    return(
        <div className="bg-clue-secondary">
            <form onSubmit ={e => {onSubmitTask(e)}}>
                <div className="form-group">
                    <h4>Suspects</h4>
                    {getCheckboxes(props.clueCard.suspects)}
                </div>
                <div className="form-group">
                    <h4>Weapons</h4>
                    {getCheckboxes(props.clueCard.weapons)}
                </div>
                <div className="form-group">
                    <h4>Rooms</h4>
                    {getCheckboxes(props.clueCard.rooms)}
                </div>
                <input type="submit" className="btn btn-primary record-submit" value="Add Cards" />
            </form>
        </div>
    )
}