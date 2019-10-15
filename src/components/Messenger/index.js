import React, { useState, useEffect, useRef } from 'react';
import Home from './Home';
import Chatbox from './Chatbox';
import ToggleBtn from './ToggleBtn';
import Profile from './Profile';

import firebase from '../../firebase';

function useMessenger() {
  const [toggle, _setToggle] = useState(false);
  const [type, _setType] = useState(null);
  const [view, _setView] = useState(null);
  const [profileOpened, _setProfile] = useState(false);
  const [notice, _setNotice] = useState(false);
  const [roomList, _setRoomList] = useState([]);
  const [roomId, _setRoomId] = useState('bI9JtmifGY3SzWYtP09F');
  const [messageList, _setMessageList] = useState([]);
  const ref = useRef(false);
  const body = useRef(null);

  useEffect(() => {
    setTimeout(() => _setToggle(true), 2000);
    setTimeout(() => _setNotice(true), 3000);

    //rooms
    const rooms = firebase.db.collection('rooms');
    rooms.onSnapshot(res => {
      const result = [];
      res.forEach(doc => {
        result.push({
          roomId: doc.id,
          ...doc.data()
        });
      });

      _setRoomList(result);
    });

    //room
    // const room = firebase.db.collection('rooms').doc(roomId);
    // room.onSnapshot(querySnapshot => {
    //   const response = querySnapshot.data();
    //   const totalData = response.messageList;
    //   _setMessageList(totalData);
    //   ref.current = true;
    // });

    return () => (ref.current = false);
  }, []);

  const _updateMessageList = async (newMessage, type) => {
    const room = firebase.db.collection('rooms').doc(roomId);
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

  useEffect(() => {
    console.log(roomId);
    // const room = firebase.db.collection('rooms').doc(roomId);
    // room
    //   .get()
    //   .then(querySnapshot => {
    //     const response = querySnapshot.data();
    //     const totalData = response.messageList;
    //     console.log(totalData);
    //     _setMessageList(totalData);
    //   })
    //   .catch(err => console.log(err));

    // const room = firebase.db.collection('rooms').doc(roomId);
    // room.onSnapshot(querySnapshot => {
    //   const response = querySnapshot.data();
    //   const totalData = response.messageList;
    //   _setMessageList(totalData);
    //   ref.current = true;
    // });
  }, [roomId]);

  return {
    toggle,
    type,
    profileOpened,
    messageList,
    body,
    notice,
    view,
    roomList,
    roomId,
    _setRoomId,
    _setView,
    _setProfile,
    _setType,
    _setNotice,
    _updateMessageList
  };
}

function Messenger() {
  const {
    toggle,
    type,
    profileOpened,
    messageList,
    body,
    notice,
    view,
    roomList,
    roomId,
    _setRoomId,
    _setView,
    _setType,
    _setProfile,
    _setNotice,
    _updateMessageList
  } = useMessenger();
  return (
    <React.Fragment>
      <Home
        view={view}
        roomList={roomList}
        _setView={_setView}
        _setRoomId={_setRoomId}
      />
      <Chatbox
        profileOpened={profileOpened}
        messageList={messageList}
        body={body}
        view={view}
        _setView={_setView}
        _setProfile={_setProfile}
        _updateMessageList={_updateMessageList}
        _setType={_setType}
      />
      <Profile
        type={type}
        profileOpened={profileOpened}
        _setProfile={_setProfile}
      />
      <ToggleBtn
        toggle={toggle}
        notice={notice}
        view={view}
        _setView={_setView}
        _setNotice={_setNotice}
      />
    </React.Fragment>
  );
}

export default Messenger;
