import React, { useState, useEffect, useRef } from 'react';
import Chatbox from './Chatbox';
import ToggleBtn from './ToggleBtn';
import Profile from './Profile';

import firebase from '../../firebase';

function useToggle() {
  const [chatboxOpened, _setChatbox] = useState(false);
  const [profileOpened, _setProfile] = useState(false);

  const _toggle = init => {
    if (init) {
      _setChatbox(false);
      _setProfile(false);
    } else {
      _setChatbox(true);
    }

    return;
  };

  return {
    chatboxOpened,
    profileOpened,
    _setProfile,
    _toggle
  };
}

function useRoom() {
  const [messageList, _setMessageList] = useState([]);
  const ref = useRef(false);

  useEffect(() => {
    const room = firebase.db.collection('rooms').doc('room');

    room.onSnapshot(querySnapshot => {
      console.log('snapshot');
      console.log(ref.current);
      const response = querySnapshot.data();
      if (ref.current) {
        const lastData = response.lastData;
        console.log(lastData);
        _setMessageList(oldArray => [...oldArray, lastData]);
      } else {
        const totalData = response.messageList;
        _setMessageList(totalData);
      }

      ref.current = true;
    });

    return () => (ref.current = false);
  }, []);

  const _updateMessageList = async newMessage => {
    const room = firebase.db.collection('rooms').doc('room');
    const res = await room.get();
    const getMessageList = res.data().messageList;
    const data = {
      type: 'B',
      message: newMessage
    };

    return room.update({
      messageList: getMessageList.concat(data),
      lastData: data
    });
  };

  return {
    messageList,
    _updateMessageList
  };
}

function Messenger() {
  const { chatboxOpened, profileOpened, _setProfile, _toggle } = useToggle();
  const { messageList, _updateMessageList } = useRoom();

  return (
    <React.Fragment>
      <Chatbox
        chatboxOpened={chatboxOpened}
        profileOpened={profileOpened}
        messageList={messageList}
        _setProfile={_setProfile}
        _updateMessageList={_updateMessageList}
      />
      <Profile profileOpened={profileOpened} _setProfile={_setProfile} />
      <ToggleBtn chatboxOpened={chatboxOpened} _toggle={_toggle} />
    </React.Fragment>
  );
}

export default Messenger;
