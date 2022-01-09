import { useEffect, useState } from "react";
import '../clueColors.css';

import PlayerCard from './PlayerCard'

export default function PlayerList (props) {

        const [players, setPlayers] = useState([]);
        const [removeCount, setRemoveCount] = useState(0);

        const addRemove = () => {
            setRemoveCount(removeCount+1)
        }
    
        useEffect(()=>{
            fetchItems();
        },[removeCount, props.addCount])
    
        const fetchItems = async () => {
            const data = await fetch ('https://smart-clue-backend.herokuapp.com/board', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token },
            });
            const dataReturn = await data.json();
            let playerInfos = [];
            Array.from(dataReturn).forEach(item => {
                let playerItem = {
                    id: item._id,
                    name: item.name,
                    is_user_player: item.is_user_player,
                    number_cards: item.number_cards    
                };
                console.log(playerItem);
                playerInfos.push(playerItem);
            })
            setPlayers(playerInfos);
        }


        let classForDiv = 'bg-clue-secondary card ' + props.hidden;
        return (
            
            <div className={classForDiv}>
                <div className="card-body">
                    <h1>Player List</h1>
                    {players.map((value, index) => {
                        return <PlayerCard key={index*17} value={value} index={index} addRemove={addRemove} token={props.token} userFormToFalse={props.userFormToFalse}/>
                    })}
                </div>
            </div>
        )
    }