/**
 * Private video and text message chat room between two peers
 */
import React, { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { SocketContext } from '../context/socket';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
 setNotification,
 resetNotification,
} from '../app/features/notificationSlice';
import Layout from '../components/Layout';
import Chat from '../components/Chat';
import { setIsBusy } from '../app/features/userSlice';

const PrivateRoom: React.FC = () => {
 const socket = useContext(SocketContext);
 const dispatch = useAppDispatch();

 const room = useAppSelector((state) => state.room);
 const userId = useAppSelector((state) => state.user.socketId);

 const userHasAccess = room.users.includes(userId);

 useEffect(() => {
  dispatch(setIsBusy(true));
  socket.removeAllListeners('enter chat room');
 }, [socket]);

 if (!userHasAccess) {
  const notificationData = {
   notificationContent: 'You do not have access to this room.',
   notificationType: 'is-warning',
   isLoading: false,
   isActive: true,
  };

  dispatch(setNotification(notificationData));
  setTimeout(() => dispatch(resetNotification()), 5000);
  return <Navigate to="/" />;
 }

 return (
  <Layout>{userHasAccess ? <Chat /> : <p className="box">No access</p>}</Layout>
 );
};

export default PrivateRoom;
