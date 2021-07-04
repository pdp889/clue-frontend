import { useState, useEffect } from "react";

export default function Summary (props) {
    
    const [summary, setSummary] = useState([]);

    useEffect(()=>{
        fetchItems();
    },[])

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
        <div>
            {summary.map((obj, index) => {
                return <p key={71+ index}>{obj[0]} | {obj[1]}</p>
            })}
        </div>
    )
}