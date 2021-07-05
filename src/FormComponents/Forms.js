import OpponentForm from './OpponentForm';
import UserForm from './UserForm';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import PlayerList from "./PlayerList"
import { useState } from 'react';
import '../clueColors.css';

export default function Forms (props) {

    const [addCount, setAddCount] = useState(0);
    const [showUserForm, setShowUserForm] = useState(true);
    const [showPlayerList, setShowPlayerList] = useState(false);

    const increaseAddCount = () => {
        setAddCount(addCount + 1);
    }

    const toggleShowUserForm = () => {
        if (showUserForm === true){
            setShowUserForm(false)
        } else {
            setShowUserForm(true);
        }
    }

    const toggleShowPlayerList = () => {
        if (showPlayerList === true){
            setShowPlayerList(false)
        } else {
            setShowPlayerList(true)
        }
    }

    if (showPlayerList && showUserForm){
        return(
            <div className='row bg-clue-secondary padding-2 vh-100'>
                <div className = 'col'>
                    <button className="no-detail-button w-100" onClick={toggleShowUserForm}>Add Opponent Instead</button>
                    <UserForm token={props.token} refresh={increaseAddCount}  />
                </div>            
                <div className='col'>
                    <button className="no-detail-button w-100" onClick={toggleShowPlayerList}>Hide Player List</button>
                    <PlayerList addCount={addCount} token={props.token}/>
                
                </div>
            </div>
        )
    } else if (showPlayerList) {
        return(
            <div className='row bg-clue-secondary padding-2 vh-100'>
                <div className = 'col'>
                    <button className="no-detail-button w-100" onClick={toggleShowUserForm}>Add User Instead</button>
                    <OpponentForm token={props.token}  refresh={increaseAddCount} />       
                </div>            
                <div className='col'>
                <button className="no-detail-button w-100" onClick={toggleShowPlayerList}>Hide Player List</button>
                    <PlayerList addCount={addCount} token={props.token}/>
                    
                </div>
            </div>
        ) 
    } else if (showUserForm) {
        return(
            <div className='row bg-clue-secondary padding-2 vh-100'>
                <div className = 'col'> 
                    <button className="no-detail-button w-50" onClick={toggleShowUserForm}>Add Opponent Instead</button>
                    <button className="no-detail-button w-50" onClick={toggleShowPlayerList}>Show Player List</button>
                    <UserForm token={props.token} refresh={increaseAddCount}  />
                   
                </div>            
            </div>
        )
    } else {
        return(
            <div className='row bg-clue-secondary padding-2 vh-100'>
                <div className = 'col'>
                    <button className="no-detail-button w-50" onClick={toggleShowUserForm}>Add User Instead</button>
                    <button className="no-detail-button w-50" onClick={toggleShowPlayerList}>Show Player List</button>
                    <OpponentForm token={props.token}  refresh={increaseAddCount} />
                    
                </div>            
            </div>
        )
    }

}