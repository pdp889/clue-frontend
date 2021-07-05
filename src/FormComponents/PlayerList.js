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
                let arrayedItem = [item._id, item.name, item.number_cards]
                playerInfos.push(arrayedItem);
            })
            setPlayers(playerInfos);
        }


        
        return (
            <div>
                {players.map((value, index) => {
                    return <PlayerCard value={value} index={index} addRemove={addRemove} token={props.token}/>
                })}
            </div>
        )
    }