import React, { useState, useEffect, useRef } from 'react';
import Chatbox from './Chatbox';
import ToggleBtn from './ToggleBtn';
import Profile from './Profile';

import firebase from '../../firebase';
const room = firebase.db.collection('rooms').doc('room');

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
  const body = useRef(null);

  useEffect(() => {
    room.onSnapshot(querySnapshot => {
      const response = querySnapshot.data();
      // if (ref.current) {
      //   const lastData = response.lastData;
      //   _setMessageList(oldArray => [...oldArray, lastData]);
      // } else {
      const totalData = response.messageList;
      _setMessageList(totalData);
      // }

      ref.current = true;
    });

    return () => (ref.current = false);
  }, []);

  const _updateMessageList = async (newMessage, type) => {
    const res = await room.get();
    const getMessageList = res.data().messageList;
    const data = {
      type: type,
      message: newMessage
    };

    return room.update({
      messageList: getMessageList.concat(data),
      lastMessage: data
    });
  };

  return {
    messageList,
    body,
    _updateMessageList
  };
}

function Messenger() {
  const { chatboxOpened, profileOpened, _setProfile, _toggle } = useToggle();
  const { messageList, body, _updateMessageList } = useRoom();
  const [type, _setType] = useState(null);

  return (
    <React.Fragment>
      <Chatbox
        chatboxOpened={chatboxOpened}
        profileOpened={profileOpened}
        messageList={messageList}
        body={body}
        _setProfile={_setProfile}
        _updateMessageList={_updateMessageList}
        _setType={_setType}
      />
      <Profile
        type={type}
        profileOpened={profileOpened}
        _setProfile={_setProfile}
      />
      <ToggleBtn chatboxOpened={chatboxOpened} _toggle={_toggle} />
    </React.Fragment>
  );
}

export default Messenger;
