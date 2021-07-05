import '../clueColors.css';
export default function PlayerCard (props) {
    
    const removePlayer = (event) => {
        console.log(props.value[0]);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ _id: props.value[0]})
        }
        fetch('https://smart-clue-backend.herokuapp.com/removePlayer', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.errors != undefined){
                let array = Array.from(data.errors);
                let errorArray = [];
                array.forEach(item => {
                    errorArray.push(item.msg + "; ")
                })
                alert(errorArray)
            } else {
                props.addRemove();
            }            
            return data;
        })

    }
    
    return (
        <div key={props.index *11} className='card player-card'>
            <p>Name: {props.value[1]}</p>
            <p>Number of Cards: {props.value[2]}</p>
            <button className="btn btn-primary w-50" onClick={removePlayer}>Remove Player</button>
        </div>
    )
}