import { useEffect, useState } from "react"

export default function Board (props) {
    
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetchItems();
    },[])



    const fetchItems = async () => {
        const data = await fetch ('https://smart-clue-backend.herokuapp.com/board', {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + props.token },
        });
        const dataReturn = await data.json();
        let playerInfos = [];
        Array.from(dataReturn).forEach(item => {
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
            for (let i = 0; i<item.tracking_array.length; i++){
                console.log()
                if (item.tracking_array[i] == 0){
                    clueBreakdown[i][1] = 'UNKNOWN';
                } else if (item.tracking_array[i] === 1){
                    clueBreakdown[i][1] = 'YES'
                } else {
                    clueBreakdown[i][1] = 'NO'
                }
            }
            console.log(item.tracking_array)
            console.log(clueBreakdown)
            let arrayedItem = [item._id, item.name, clueBreakdown]
            playerInfos.push(arrayedItem);
        })
        setPlayers(playerInfos);
    }
    
    return (
        <div className="d-flex flex-row">
            {players.map((value, index) => {
                return (
                    <div  key={index}>
                        <p>id: {value[0]}</p>
                        <p>name: {value[1]}</p>
                        <div>tracking array: {value[2].map((obj, index) => {
                            return <p>{obj[0]} - {obj[1]}</p>
                        })}</div>
                    </div>
                )
            })}
        </div>
    )
}