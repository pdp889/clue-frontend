import { useEffect, useState } from "react";
import Summary from "./Summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../clueColors.css';
import './gameComponents.css';
import {Check, X, Question, ThreeDotsVertical} from 'react-bootstrap-icons';

export default function Board (props) {
    
    const [players, setPlayers] = useState([]);
    const [tablePrep, setTablePrep] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(()=>{
        fetchItems();
        handleTablePrep();
    },[players])



    const handleTablePrep = () => {
        let array = [];
        if (players.length > 0){
            props.clueCard.allCards.forEach(i => {
                let smallArray = [];
                
                players.forEach(player => {
                    smallArray.push (
                        <td>{player.clueBreakdown[i]}</td>
                    );
                });
                array.push (
                    <tr>
                        {smallArray.map ((arrayItem) => {
                            return arrayItem;
                        })}
                    </tr>
                );
            });
            setTablePrep(array);
        }

    }


    const fetchItems = async () => {
        const data = await fetch ('https://smart-clue-backend.herokuapp.com/board', {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + props.token },
        });
        const dataReturn = await data.json();
        let playerInfos = [];
        Array.from(dataReturn).forEach(item => {
            let clueBreakdown = {};
            props.clueCard.allCards.forEach(i => {
                if (item.tracking_obj[i] === 0){
                    clueBreakdown[i] = <Question color="lightgrey"/>;
                } else if (item.tracking_obj[i] === 1){
                    clueBreakdown[i] = <Check font-weight="bold" color="darkgreen"/>
                } else {
                    clueBreakdown[i] = <X font-weight="bold" color="red"/>
                }
            });
            let arrayedItem = {
                id: item._id, 
                name: item.name, 
                clueBreakdown: clueBreakdown
            };
            playerInfos.push(arrayedItem);
        })
        setPlayers(playerInfos);
    }

    const toggleShowDetails = () => {
        setShowDetails(!showDetails);
    }
    
    if (showDetails){
        return (
            <div className="d-flex flex-row bg-clue-secondary padding-2">
                <Summary token={props.token} clueCard={props.ClueCard}/> 
                <table className="table table-bordered clue-table">
                    <thead className="thead-dark">
                        <tr>
                            {players.map((value, index) => {
                                return (
                                    <th scope="col" className="playerNameOnTable">{value.name}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tablePrep}
                    </tbody>
                </table>
                <button className="no-detail-button expand-close" onClick={toggleShowDetails}><ThreeDotsVertical /></button>
            </div>
        )
    } else {
        return (
            <div className="d-flex flex-row bg-clue-secondary padding-2">
                <Summary token={props.token} clueCard={props.ClueCard}/> 
                <button className="no-detail-button expand-close" onClick={toggleShowDetails}><ThreeDotsVertical /></button>
            </div>
        )
    }

}