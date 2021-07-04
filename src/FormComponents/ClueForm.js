import { useState } from "react"
// This component will generate an array of the indexes of the selected boxes.

export default function ClueForm (props) {
    
    const [formArray, setFormArray] = useState ([false, false, false, false, false, false,false, false, false, false, false, false,false, false, false, false, false, false,false, false, false])

    const onSubmitTask = (event) => {
        event.preventDefault();
        props.arrayFromForm(formArray);
    }

    const toggleByIndex = (index) => {
        let copy = [...formArray]
        if (copy[index] === false){
            copy[index] = true;
        } else {
            copy[index] = false;
        }
        setFormArray(copy);
    }

    return(
        <div>
            <form onSubmit ={e => {onSubmitTask(e)}}>
                <h1>Possible Cards </h1>
                <h2>Suspects</h2>
                <label htmlFor='Mustard'>Mustard</label>
                <input
                    onChange={e => toggleByIndex(0)}
                    type='checkbox'
                    name='Mustard'
                    value={formArray[0]}
                />
                <label htmlFor='Plum'>Plum</label>
                <input
                    onChange={e => toggleByIndex(1)}
                    type='checkbox'
                    name='Plum'
                    value={formArray[1]}
                />
                <label htmlFor='Green'>Green</label>
                <input
                    onChange={e => toggleByIndex(2)}
                    type='checkbox'
                    name='Green'
                    value={formArray[2]}
                />
                <label htmlFor='Peacock'>Peacock</label>
                <input
                    onChange={e => toggleByIndex(3)}
                    type='checkbox'
                    name='Peacock'
                    value={formArray[3]}
                />
                <label htmlFor='Scarlet'>Scarlet</label>
                <input
                    onChange={e => toggleByIndex(4)}
                    type='checkbox'
                    name='Scarlet'
                    value={formArray[4]}
                />
                <label htmlFor='White'>White</label>
                <input
                    onChange={e => toggleByIndex(5)}
                    type='checkbox'
                    name='White'
                    value={formArray[5]}
                />
                <h2>Weapons</h2>
                <label htmlFor='Knife'>Knife</label>
                <input
                    onChange={e => toggleByIndex(6)}
                    type='checkbox'
                    name='Knife'
                    value={formArray[6]}
                />
                <label htmlFor='Candlestick'>Candlestick</label>
                <input
                    onChange={e => toggleByIndex(7)}
                    type='checkbox'
                    name='Candlestick'
                    value={formArray[7]}
                />
                <label htmlFor='Revolver'>Revolver</label>
                <input
                    onChange={e => toggleByIndex(8)}
                    type='checkbox'
                    name='Revolver'
                    value={formArray[8]}
                />
                <label htmlFor='Rope'>Rope</label>
                <input
                    onChange={e => toggleByIndex(9)}
                    type='checkbox'
                    name='Rope'
                    value={formArray[9]}
                />
                <label htmlFor='Lead Pipe'>Lead Pipe</label>
                <input
                    onChange={e => toggleByIndex(10)}
                    type='checkbox'
                    name='Lead Pipe'
                    value={formArray[10]}
                />
                <label htmlFor='Wrench'>Wrench</label>
                <input
                    onChange={e => toggleByIndex(11)}
                    type='checkbox'
                    name='Wrench'
                    value={formArray[11]}
                />
                <h2>Rooms</h2>
                <label htmlFor='Hall'>Hall</label>
                <input
                    onChange={e => toggleByIndex(12)}
                    type='checkbox'
                    name='Hall'
                    value={formArray[12]}
                />
                <label htmlFor='Lounge'>Lounge</label>
                <input
                    onChange={e => toggleByIndex(13)}
                    type='checkbox'
                    name='Lounge'
                    value={formArray[13]}
                />
                <label htmlFor='Dining Room'>Dining Room</label>
                <input
                    onChange={e => toggleByIndex(14)}
                    type='checkbox'
                    name='Dining Room'
                    value={formArray[14]}
                />
                <label htmlFor='Kitchen'>Kitchen</label>
                <input
                    onChange={e => toggleByIndex(15)}
                    type='checkbox'
                    name='Kitchen'
                    value={formArray[15]}
                />
                <label htmlFor='Ballroom'>Ballroom</label>
                <input
                    onChange={e => toggleByIndex(16)}
                    type='checkbox'
                    name='Ballroom'
                    value={formArray[16]}
                />
                <label htmlFor='Conservatory'>Conservatory</label>
                <input
                    onChange={e => toggleByIndex(17)}
                    type='checkbox'
                    name='Conservatory'
                    value={formArray[17]}
                />
                <label htmlFor='Billiard Room'>Billiard Room</label>
                <input
                    onChange={e => toggleByIndex(18)}
                    type='checkbox'
                    name='Billiard Room'
                    value={formArray[18]}
                /><label htmlFor='Library'>Library</label>
                <input
                    onChange={e => toggleByIndex(19)}
                    type='checkbox'
                    name='Library'
                    value={formArray[19]}
                /><label htmlFor='Study'>Study</label>
                <input
                    onChange={e => toggleByIndex(20)}
                    type='checkbox'
                    name='Study'
                    value={formArray[20]}
                />
                <input type="submit" className="btn btn-primary record-submit" value="Add Cards" />
            </form>
        </div>
    )
}