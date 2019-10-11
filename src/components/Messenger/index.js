import React, { useState, useEffect, useRef } from 'react';
import Home from './Home';
import Chatbox from './Chatbox';
import ToggleBtn from './ToggleBtn';
import Profile from './Profile';

import firebase from '../../firebase';
const room = firebase.db.collection('rooms').doc('room');

function useMessenger() {
  const [type, _setType] = useState(null);
  const [chatboxOpened, _setChatbox] = useState(false);
  const [profileOpened, _setProfile] = useState(false);
  const [notice, _setNotice] = useState(false);
  const [messageList, _setMessageList] = useState([]);
  const ref = useRef(false);
  const body = useRef(null);

  useEffect(() => {
    setTimeout(() => _setNotice(true), 3000);

    room.onSnapshot(querySnapshot => {
      const response = querySnapshot.data();
      const totalData = response.messageList;
      _setMessageList(totalData);
      ref.current = true;
    });

    return () => (ref.current = false);
  }, []);

  const _toggle = init => {
    if (init) {
      _setChatbox(false);
      _setProfile(false);
    } else {
      _setChatbox(true);
      _setNotice(false);
    }
    return;
  };

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
    type,
    chatboxOpened,
    profileOpened,
    messageList,
    body,
    notice,
    _setProfile,
    _setType,
    _toggle,
    _updateMessageList
  };
}

function Messenger() {
  const {
    type,
    chatboxOpened,
    profileOpened,
    messageList,
    body,
    notice,
    _setType,
    _setProfile,
    _toggle,
    _updateMessageList
  } = useMessenger();

  return (
    <React.Fragment>
      <Home />
      {/* <Chatbox
        chatboxOpened={chatboxOpened}
        profileOpened={profileOpened}
        messageList={messageList}
        body={body}
        _setProfile={_setProfile}
        _updateMessageList={_updateMessageList}
        _setType={_setType}
      /> */}
      <Profile
        type={type}
        profileOpened={profileOpened}
        _setProfile={_setProfile}
      />
      <ToggleBtn chatboxOpened={chatboxOpened} notice={notice} _toggle={_toggle} />
    </React.Fragment>
  );
}

export default Messenger;
