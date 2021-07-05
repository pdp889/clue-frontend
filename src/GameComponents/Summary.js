import { useState, useEffect } from "react";
import '../clueColors.css';
import './gameComponents.css'

export default function Summary (props) {
    
    const [summary, setSummary] = useState([]);

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
        let dataArray = Array.from(dataReturn);
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
            for (let i = 0; i<dataArray.length; i++){
                if (dataArray[i]["value"] === null){
                    clueBreakdown[i][1] = '';
                } else {
                    clueBreakdown[i][1] = dataArray[i]["value"];
                }
            }

        setSummary(clueBreakdown);
    }

    return (
        <div className="border-end border-5 clue-table-border-color">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Card</th>
                    <th scope="col">Known?</th>
                </tr>
            </thead>
            <tbody>
                {summary.map((obj, index) => {
                    return (
                        <tr key={71+ index}> 
                            <th scope="row" >{obj[0]}</th>
                            <td>{obj[1]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
        

    )
}