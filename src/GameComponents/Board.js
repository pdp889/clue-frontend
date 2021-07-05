import { useEffect, useState } from "react";
import Summary from "./Summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../clueColors.css';
import './gameComponents.css';

import {Check, X, Question, ThreeDotsVertical } from 'react-bootstrap-icons';

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
            for (let i = 0; i<21; i++){
                let smallArray = [];
                
                players.map((value, index) => {
                    smallArray.push (
                            <td>{value[2][i][1]}</td>
                    )
                })
                array.push (
                    <tr>
                        {smallArray.map ((arrayItem) => {
                            return arrayItem;
                        })}
                    </tr>
                )
                    }
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

                if (item.tracking_array[i] == 0){
                    clueBreakdown[i][1] = <Question color="lightgrey"/>;
                } else if (item.tracking_array[i] === 1){
                    clueBreakdown[i][1] = <Check font-weight="bold" color="darkgreen"/>
                } else {
                    clueBreakdown[i][1] = <X font-weight="bold" color="red"/>
                }
            }
            let arrayedItem = [item._id, item.name, clueBreakdown]
            playerInfos.push(arrayedItem);
        })
        setPlayers(playerInfos);
    }

    const toggleShowDetails = () => {
        if (showDetails===true) {
            setShowDetails(false)
        } else {
            setShowDetails(true);
        }
    }
    
    if (showDetails){
        return (
            <div className="d-flex flex-row bg-clue-secondary padding-2">
                <Summary token={props.token}/> 
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            {players.map((value, index) => {
                                return (
                                    <th scope="col">{value[1]}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tablePrep}
                    </tbody>
                </table>
                <button className="no-detail-button expand-close" onClick={toggleShowDetails}>Hide</button>
            </div>
        )
    } else {
        return (
            <div className="d-flex flex-row bg-clue-secondary padding-2">
                <Summary token={props.token}/> 
                <button className="no-detail-button expand-close" onClick={toggleShowDetails}>Expand</button>
            </div>
        )
    }

}