/**
 * New user form
 */
import React, { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setNewUser } from '../../app/features/userSlice';
import { sendUserEntered } from '../../services/socket/publishers';

const NewUserForm: React.FC = () => {
 const dispatch = useAppDispatch();
 const [usernameInput, setUsernameInput] = useState<string>('');

 const handleUsernameSubmit = (event: FormEvent) => {
  event.preventDefault();

  window.localStorage.setItem('chat-username', usernameInput);
  dispatch(setNewUser(usernameInput));
  setUsernameInput('');

  sendUserEntered(usernameInput);
 };

 return (
  <form id="usernameForm" className="box" onSubmit={handleUsernameSubmit}>
   <p className="is-size-7 is-family-monospace">Select your username</p>
   <label id="username" htmlFor="usernameInput" className="label">
    Username
   </label>
   <div className="control block">
    <input
     id="usernameInput"
     className="input"
     type="text"
     value={usernameInput}
     onChange={(e) => setUsernameInput(e.target.value)}
    />
   </div>
   <div className="control block">
    <button id="submitUsername" type="submit" className="button is-primary">
     Submit
    </button>
   </div>
  </form>
 );
};

export default NewUserForm;
