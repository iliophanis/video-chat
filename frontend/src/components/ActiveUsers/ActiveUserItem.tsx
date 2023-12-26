/**
 * Active user list item
 */
import React from 'react';
import { User } from '../../util/types';
import { setModalInviteToChat } from '../../util/middleware/appActions/modal';

interface ActiveUserItemProps {
 user: User;
}

const ActiveUserItem: React.FC<ActiveUserItemProps> = ({ user }) => {
 return (
  <div className="panel-block  is-dark is-flex is-flex-direction-row is-justify-content-space-between">
   <p className="mx-4">{user.username}</p>
   {!user.isBusy ? (
    <button
     onClick={() => setModalInviteToChat(user.socketId, user.username)}
     className="button is-success"
    >
     Invite
    </button>
   ) : (
    <span className="tag is-danger is-rounded">Not Available</span>
   )}
  </div>
 );
};

export default ActiveUserItem;
