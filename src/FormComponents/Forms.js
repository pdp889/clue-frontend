import OpponentForm from './OpponentForm';
import UserForm from './UserForm';
import FormHeader from './FormHeader';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import PlayerList from "./PlayerList"
import { useState } from 'react';

export default function Forms (props) {

    const [addCount, setAddCount] = useState(0);

    const increaseAddCount = () => {
        setAddCount(addCount + 1);
    }

    return(
        <div className='row'>
            <div className = 'col'>
                <OpponentForm token={props.token}  refresh={increaseAddCount} />
                <UserForm token={props.token} refresh={increaseAddCount}  />
            </div>            
            <div className='col'>
            <PlayerList addCount={addCount} token={props.token}/>
            </div>
        </div>
    )

}