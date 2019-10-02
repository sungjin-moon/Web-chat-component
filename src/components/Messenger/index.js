import React, { useState } from 'react';
import Chatbox from './Chatbox';
import ToggleBtn from './ToggleBtn';
import Profile from './Profile';

function Messenger() {
  const [toggle, _setToggle] = useState(false);
  const [isOpened, _setIsOpened] = useState(false);

  return (
    <React.Fragment>
      <Chatbox toggle={toggle} isOpened={isOpened} _setIsOpened={_setIsOpened} />
      <Profile isOpened={isOpened} />
      <ToggleBtn toggle={toggle} _setToggle={_setToggle} />
    </React.Fragment>
  );
}

export default Messenger;
