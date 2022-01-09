import OpponentForm from './OpponentForm';
import UserForm from './UserForm';
import PlayerList from "./PlayerList"
import { useState } from 'react';
import '../clueColors.css';

export default function Forms (props) {

    const clueCard = props.clueCard;
    const [addCount, setAddCount] = useState(0);
    const [showUserForm, setShowUserForm] = useState(true);

    const increaseAddCount = () => {
        setAddCount(addCount + 1);
    }

    const userFormToFalse = () => {
        setShowUserForm(false);
    }


    if (showUserForm){
        return(
            <div className='row bg-clue-secondary vh-96 padding-2 main-content'>
                <div className = 'col'>
                    <UserForm token={props.token} refresh={increaseAddCount} clueCard={clueCard} userFormSubmitted={userFormToFalse}/>
                </div>            
                <div className='col playerlist'>
                    <PlayerList addCount={addCount} token={props.token} hidden={"hidden"} userFormToFalse={userFormToFalse}/>
                </div>
            </div>
        )
    } else {
        return(
            <div className='row bg-clue-secondary vh-96 padding-2 main-content'>
                <div className = 'col'>
                    <OpponentForm token={props.token}  refresh={increaseAddCount} clueCard={clueCard} />       
                </div>            
                <div className='col playerlist'>
                    <PlayerList addCount={addCount} token={props.token} hidden={""} userFormToFalse={userFormToFalse}/>
                </div>
            </div>
        ) 
    } 

}