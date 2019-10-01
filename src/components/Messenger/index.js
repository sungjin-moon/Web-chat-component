import React from 'react';
import Chatbox from './Chatbox';
import ToggleBtn from './ToggleBtn';
import Profile from './Profile';

const Messenger = () => {
  return (
    <React.Fragment>
      <Chatbox />
      <Profile />
      <ToggleBtn />
    </React.Fragment>
  );
};

export default Messenger;
