import React, { useState } from 'react';
import styled from 'styled-components';
import YourMessage from './YourMessage';
import MyMessage from './MyMessage';

function useInput(_updateMessageList, _setNoticeCount, _setView, _sendAiClient) {
  const [message, _setMessage] = useState('');

  const _handleChange = event => {
    return _setMessage(event.target.value);
  };

  const _handleKeyPress = event => {
    if (event.keyCode === 13) {
      _sendAiClient(message);
      _setMessage('');
    }
  };

  return {
    message,
    _handleChange,
    _handleKeyPress
  };
}

function Chatbox({
  profileOpened,
  messageList,
  body,
  view,
  _setRoomId,
  _setView,
  _setProfile,
  _updateMessageList,
  _setType,
  _setNoticeCount,
  _setMessageList,
  _sendAiClient
}) {
  const { message, _handleChange, _handleKeyPress } = useInput(
    _updateMessageList,
    _setNoticeCount,
    _setView,
    _sendAiClient
  );

  return (
    <Container view={view} profileOpened={profileOpened}>
      <Head view={view}>
        {view === 'chatbox-dark' && (
          <div
            className="chatbox-dark-viewMore"
            onClick={() => {
              _setView('chatbox');
              _setNoticeCount(0);
            }}
          >
            View more
          </div>
        )}
        {view === 'chatbox-dark' && (
          <div
            className="chatbox-dark-close"
            onClick={() => {
              _setView(null);
              _setNoticeCount(0);
              _setRoomId(null);
              _setMessageList([]);
            }}
          >
            X
          </div>
        )}
        <div
          className="chatbox-leftBtn"
          onClick={() => {
            _setView('home');
            _setRoomId(null);
            _setMessageList([]);
          }}
        >
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="chatbox-title">Budy</div>
      </Head>
      <Body ref={body} view={view}>
        {messageList.map((item, id) => {
          if (item.type === 'Budy') {
            return (
              <YourMessage
                message={item.message}
                key={id}
                view={view}
                _setProfile={_setProfile}
                _setType={_setType}
              />
            );
          } else if (item.type === 'User') {
            return (
              <MyMessage
                message={item.message}
                key={id}
                view={view}
                _setProfile={_setProfile}
                _setType={_setType}
              />
            );
          } else {
            return null;
          }
        })}
      </Body>
      <Bottom view={view}>
        <UserInput>
          <textarea
            className="chatbox-text"
            name="message"
            cols="30"
            rows="1"
            value={message}
            onChange={_handleChange}
            // onKeyPress={_handleKeyPress}
            onKeyDown={_handleKeyPress}
          ></textarea>
          {/* <div id="send">
            <i class="fas fa-location-arrow"></i>
          </div> */}
        </UserInput>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  display: ${({ view }) =>
    view === 'chatbox' || view === 'chatbox-dark' ? 'block' : 'none'};
  box-shadow: ${({ view }) =>
    view === 'chatbox-dark' ? 'none' : '0 7px 15px #999'};
  position: absolute;
  bottom: 122px;
  right: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 5;
  transition: opacity 0.15s linear, transform 1s;
  transform: ${({ profileOpened }) =>
    profileOpened
      ? 'translateX(-100px) scale(0.9)'
      : 'translateX (0px) scale(1)'};
`;

const Head = styled.div`
  display: flex;
  justify-content: ${({ view }) =>
    view === 'chatbox-dark' ? 'center' : 'none'};
  padding: 20px;
  font-weight: 500;
  font-size: 18px;
  color: white;
  background-color: ${({ view }) =>
    view === 'chatbox-dark' ? 'none' : '#298075'};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  :hover {
    .chatbox-dark-viewMore {
      opacity: 1;
    }
    .chatbox-dark-close {
      opacity: 1;
    }
  }
  .chatbox-leftBtn {
    display: ${({ view }) => (view !== 'chatbox-dark' ? 'block' : 'none')};
    font-size: 24px;
    cursor: pointer;
  }
  .chatbox-title {
    display: ${({ view }) => (view !== 'chatbox-dark' ? 'block' : 'none')};
    margin-left: 10px;
    padding: 3px 0px;
  }
  .chatbox-dark-viewMore {
    background-color: rgb(103, 120, 143);
    border-radius: 16px;
    font-size: 13px;
    padding: 8px 20px;
    font-weight: normal;
    opacity: 0;
    cursor: pointer;
  }
  .chatbox-dark-close {
    background-color: rgb(103, 120, 143);
    position: absolute;
    width: 30px;
    height: 30px;
    right: 28px;
    font-size: 13px;
    border-radius: 50%;
    padding: 8px 11px;
    font-weight: normal;
    margin-top: 2px;
    opacity: 0;
    cursor: pointer;
  }
`;

const Body = styled.div`
  width: 375px;
  height: ${({ view }) => (view === 'chatbox-dark' ? '260px' : '400px')};
  background-color: ${({ view }) =>
    view === 'chatbox-dark' ? 'none' : 'white'};
  padding: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const Bottom = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({ view }) =>
    view === 'chatbox-dark' ? 'none' : 'white'};
  padding: 30px 20px;
`;

const UserInput = styled.div`
  box-shadow: 1px 2px 6px #999;
  height: 70px;
  border-radius: 5px;
  .chatbox-text {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 22px;
    resize: none;
    border: none;
  }
  #send {
    background-color: #f9d954;
    padding: 10px;
    font-size: 20px;
  }
`;

export default Chatbox;
