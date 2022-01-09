import { useState, useEffect } from "react";
import '../clueColors.css';
import './gameComponents.css';
import {Search} from 'react-bootstrap-icons';


export default function Summary (props) {
    
    const [summary, setSummary] = useState({});
    const clueCard = {
        suspects: ['Mustard', 'Plum', 'Green', 'Peacock', 'Scarlet', 'White'],
        weapons: ['Knife', 'Candlestick', 'Revolver', 'Rope', 'Lead Pipe', 'Wrench'],
        rooms:['Hall', 'Lounge', 'Dining Room', 'Kitchen', 'Ballroom', 'Conservatory', 'Billiard Room', 'Library', 'Study'],
    };

    clueCard.allCards =[].concat(clueCard.suspects, clueCard.weapons, clueCard.rooms);
    let clueCardShort = {};
    clueCard.allCards.forEach( x => {
        clueCardShort[x] = x;
    });
    clueCardShort["Candlestick"] = "Candls.";
    clueCardShort["Lead Pipe"] = "Ld. Pipe";
    clueCardShort["Dining Room"] = "Din. Rm.";
    clueCardShort["Conservatory"] = "Cons.";
    clueCardShort["Billiard Room"] = "Bil. Rm.";

    useEffect(()=>{
        fetchItems();
    },[summary])

    const fetchItems = async () => {
        const data = await fetch ('https://smart-clue-backend.herokuapp.com/boardSummary', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + props.token },
        });
        const dataReturn = await data.json();
        let dataArray = dataReturn;
        const clueBreakdown = {};
        clueCard.allCards.forEach(x => {
            if (dataArray[x] === null){
                clueBreakdown[x] = '';
            } else {
                clueBreakdown[x] = dataArray[x];
            }
        });
        setSummary(clueBreakdown);
    }

    return (
        <div className="border-end border-5 clue-table-border-color">
        <table className="table table-bordered clue-table">
            <thead>
                <tr>
                    <th scope="col">Card</th>
                    <th scope="col" className="SearchIcon"><Search /></th>
                </tr>
            </thead>
            <tbody>
                {clueCard.allCards.map((key, index) => {
                    return (
                        <tr key={71+ index}> 
                            <th scope="row" >{clueCardShort[key]}</th>
                            <td className="playerNameOnTable">{summary[key]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}