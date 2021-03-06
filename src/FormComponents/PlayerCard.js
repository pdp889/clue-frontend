import '../clueColors.css';
export default function PlayerCard (props) {
    
    const removePlayer = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ _id: props.value.id})
        }
        fetch('https://smart-clue-backend.herokuapp.com/removePlayer', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.errors !== undefined){
                let array = Array.from(data.errors);
                let errorArray = [];
                array.forEach(item => {
                    errorArray.push(item.msg + "; ")
                })
                alert(errorArray)
            } else {
                
                props.addRemove();
            }
            if (props.value.is_user_player){
                window.location.reload();
            }            
            return data;
        })

    }
    if (props.value.is_user_player){
        props.userFormToFalse();
        return (
            <div key={props.index *11} className='card player-card'>
                <p>Name: {props.value.name}</p>
                <p>Number of Cards: {props.value.number_cards}</p>
                <button className="btn btn-primary w-70" onClick={removePlayer}>Remove User</button>
            </div>
        )
    }
    else {
        return (
            <div key={props.index *11} className='card player-card'>
                <p>Name: {props.value["name"]}</p>
                <p>Number of Cards: {props.value["number_cards"]}</p>
                <button className="btn btn-primary w-70" onClick={removePlayer}>Remove Player</button>
            </div>
        )
    }
    
}