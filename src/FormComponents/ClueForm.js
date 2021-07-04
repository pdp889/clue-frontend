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
            <div class="form-group">
                <h4>Suspects</h4>
                <div className="form-check">
                    <label htmlFor='Mustard'>Mustard</label>
                    <input
                        onChange={e => toggleByIndex(0)}
                        type='checkbox'
                        name='Mustard'
                        className="form-check-input"
                        value={formArray[0]}
                    />
                </div>
                <div className="form-check">
                    <label htmlFor='Plum'>Plum</label>
                    <input
                        onChange={e => toggleByIndex(1)}
                        type='checkbox'
                        name='Plum'
                        className="form-check-input"
                        value={formArray[1]}
                    />
                </div>
                <div className="form-check">
                    <label htmlFor='Green'>Green</label>
                    <input
                        onChange={e => toggleByIndex(2)}
                        type='checkbox'
                        name='Green'
                        className="form-check-input"
                        value={formArray[2]}
                    />
                </div>
                <div className="form-check">
                    <label htmlFor='Peacock'>Peacock</label>
                    <input
                        onChange={e => toggleByIndex(3)}
                        type='checkbox'
                        name='Peacock'
                        className="form-check-input"
                        value={formArray[3]}
                    />
                </div>
                <div className="form-check">
                    <label htmlFor='Scarlet'>Scarlet</label>
                    <input
                        onChange={e => toggleByIndex(4)}
                        type='checkbox'
                        name='Scarlet'
                        className="form-check-input"
                        value={formArray[4]}
                    />
                </div>
                <div className="form-check">
                    <label htmlFor='White'>White</label>
                    <input
                        onChange={e => toggleByIndex(5)}
                        type='checkbox'
                        name='White'
                        className="form-check-input"
                        value={formArray[5]}
                    />
                </div>
            </div>
                <div class="form-group">
                    <h4>Weapons</h4>
                    <div className="form-check">
                        <label htmlFor='Knife'>Knife</label>
                        <input
                            onChange={e => toggleByIndex(6)}
                            type='checkbox'
                            name='Knife'
                            className="form-check-input"
                            value={formArray[6]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Candlestick'>Candlestick</label>
                        <input
                            onChange={e => toggleByIndex(7)}
                            type='checkbox'
                            name='Candlestick'
                            className="form-check-input"
                            value={formArray[7]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Revolver'>Revolver</label>
                        <input
                            onChange={e => toggleByIndex(8)}
                            type='checkbox'
                            name='Revolver'
                            className="form-check-input"
                            value={formArray[8]}
                        />
                        </div>
                    <div className="form-check">
                        <label htmlFor='Rope'>Rope</label>
                        <input
                            onChange={e => toggleByIndex(9)}
                            type='checkbox'
                            name='Rope'
                            className="form-check-input"
                            value={formArray[9]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Lead Pipe'>Lead Pipe</label>
                        <input
                            onChange={e => toggleByIndex(10)}
                            type='checkbox'
                            name='Lead Pipe'
                            className="form-check-input"
                            value={formArray[10]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Wrench'>Wrench</label>
                        <input
                            onChange={e => toggleByIndex(11)}
                            type='checkbox'
                            name='Wrench'
                            className="form-check-input"
                            value={formArray[11]}
                        />
                    </div>
                </div>
                <div class="form-group">
                    <h4>Rooms</h4>
                    <div className="form-check">
                        <label htmlFor='Hall'>Hall</label>
                        <input
                            onChange={e => toggleByIndex(12)}
                            type='checkbox'
                            name='Hall'
                            className="form-check-input"
                            value={formArray[12]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Lounge'>Lounge</label>
                        <input
                            onChange={e => toggleByIndex(13)}
                            type='checkbox'
                            name='Lounge'
                            className="form-check-input"
                            value={formArray[13]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Dining Room'>Dining Room</label>
                        <input
                            onChange={e => toggleByIndex(14)}
                            type='checkbox'
                            name='Dining Room'
                            className="form-check-input"
                            value={formArray[14]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Kitchen'>Kitchen</label>
                        <input
                            onChange={e => toggleByIndex(15)}
                            type='checkbox'
                            name='Kitchen'
                            className="form-check-input"
                            value={formArray[15]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Ballroom'>Ballroom</label>
                        <input
                            onChange={e => toggleByIndex(16)}
                            type='checkbox'
                            name='Ballroom'
                            className="form-check-input"
                            value={formArray[16]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Conservatory'>Conservatory</label>
                        <input
                            onChange={e => toggleByIndex(17)}
                            type='checkbox'
                            name='Conservatory'
                            className="form-check-input"
                            value={formArray[17]}
                        />
                        </div>
                    <div className="form-check">
                        <label htmlFor='Billiard Room'>Billiard Room</label>
                        <input
                            onChange={e => toggleByIndex(18)}
                            type='checkbox'
                            name='Billiard Room'
                            className="form-check-input"
                            value={formArray[18]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Library'>Library</label>
                        <input
                            onChange={e => toggleByIndex(19)}
                            type='checkbox'
                            name='Library'
                            className="form-check-input"
                            value={formArray[19]}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor='Study'>Study</label>
                        <input
                            onChange={e => toggleByIndex(20)}
                            type='checkbox'
                            name='Study'
                            className="form-check-input"
                            value={formArray[20]}
                        />
                    </div>
                </div>
                
                <input type="submit" className="btn btn-primary record-submit" value="Add Cards" />
            </form>
        </div>
    )
}