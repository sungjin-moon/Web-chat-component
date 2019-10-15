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
  const [noticeCount, _setNoticeCount] = useState(0);
  const [roomList, _setRoomList] = useState([]);
  const [roomId, _setRoomId] = useState(null);
  const [messageList, _setMessageList] = useState([]);
  const ref = useRef(false);
  const body = useRef(null);

  useEffect(() => {
    //rooms
    setTimeout(() => _setToggle(true), 2000);
    setTimeout(() => _setNotice(true), 3000);
    const rooms = firebase.db.collection('rooms').orderBy('timestamp', 'desc');
    rooms.onSnapshot(res => {
      if (res) {
        const result = [];

        res.forEach(doc => {
          result.push({
            roomId: doc.id,
            ...doc.data()
          });
        });

        _setRoomList(result);
      }
    });

    return () => (ref.current = false);
  }, []);

  useEffect(() => {
    //room
    if (roomId !== null) {
      const room = firebase.db.collection('rooms').doc(roomId);
      room.onSnapshot(querySnapshot => {
        const response = querySnapshot.data();
        if (response) {
          const totalList = response.messageList;
          _setMessageList(totalList);
        } else {
          _setMessageList([]);
        }
      });
    }
  }, [roomId]);

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
      lastMessage: newMessage,
      lastType: type
    });
  };

  const _createRoom = () => {
    _setView('chatbox');
    const data = {
      type: 'Budy',
      message: '안녕하세요. 버디입니다~ 무엇을 도와드릴까요?'
    };
    firebase.db
      .collection('rooms')
      .add({
        messageList: [data],
        lastMessage: data.message,
        lastType: data.type,
        timestamp: Date.now()
      })
      .then(ref => {
        console.log(ref.id);
        const roomId = ref.id;
        _setRoomId(roomId);
      });
    return;
  };

  const _deleteRoom = roomId => {
    firebase.db
      .collection('rooms')
      .doc(roomId)
      .delete();
  };

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
    noticeCount,
    _setNoticeCount,
    _setRoomId,
    _setView,
    _setProfile,
    _setType,
    _setNotice,
    _updateMessageList,
    _createRoom,
    _deleteRoom
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
    noticeCount,
    roomId,
    _setNoticeCount,
    _setRoomId,
    _setView,
    _setType,
    _setProfile,
    _setNotice,
    _updateMessageList,
    _createRoom,
    _deleteRoom
  } = useMessenger();
  return (
    <React.Fragment>
      <Home
        view={view}
        roomList={roomList}
        _setView={_setView}
        _setRoomId={_setRoomId}
        _createRoom={_createRoom}
        _deleteRoom={_deleteRoom}
      />
      <Chatbox
        profileOpened={profileOpened}
        messageList={messageList}
        body={body}
        view={view}
        roomId={roomId}
        _setView={_setView}
        _setRoomId={_setRoomId}
        _setProfile={_setProfile}
        _updateMessageList={_updateMessageList}
        _setType={_setType}
        _setNoticeCount={_setNoticeCount}
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
        noticeCount={noticeCount}
        _setView={_setView}
        _setNotice={_setNotice}
        _setNoticeCount={_setNoticeCount}
      />
    </React.Fragment>
  );
}

export default Messenger;
