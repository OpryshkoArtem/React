import React from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = ({ isLoggedIn }) => isLoggedIn
  ? (<UserGreeting />)
  : (<GuestGreeting />)


export default Greeting;