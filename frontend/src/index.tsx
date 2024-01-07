import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { SocketContext, socket } from './context/socket';
import App from './App';
import { store } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
 <Provider store={store}>
  <SocketContext.Provider value={socket}>
   <Router>
    <App />
   </Router>
  </SocketContext.Provider>
 </Provider>
);
