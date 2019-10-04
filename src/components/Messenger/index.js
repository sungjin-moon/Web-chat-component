import React, { useState, useEffect } from 'react';
import Chatbox from './Chatbox';
import ToggleBtn from './ToggleBtn';
import Profile from './Profile';

import firebase from '../../firebase';

function Messenger() {
  const [chatboxOpened, _setChatbox] = useState(false);
  const [profileOpened, _setProfile] = useState(false);

  const _toggle = (init) => {
    if (init) {
      _setChatbox(false);
      _setProfile(false);
    } else {
      _setChatbox(true);
    }
    
    return;
  }

  useEffect(() => {
    firebase.db.collection('rooms').doc('room').
    console.log(firebase)
  },[])

  return (
    <React.Fragment>
      <Chatbox
        chatboxOpened={chatboxOpened}
        profileOpened={profileOpened}
        _setProfile={_setProfile}
      />
      <Profile profileOpened={profileOpened} _setProfile={_setProfile} />
      <ToggleBtn chatboxOpened={chatboxOpened} _toggle={_toggle} />
    </React.Fragment>
  );
}

export default Messenger;
