import React, { useState } from 'react';
import styled from 'styled-components';
import YourMessage from './YourMessage';
import MyMessage from './MyMessage';

import dialogflow from '../../dialogflow';
const aiClient = dialogflow.client;

function useInput(_updateMessageList) {
  const [message, _setMessage] = useState('');

  const _sendAiClient = message => {
    _updateMessageList(message, 'User');

    aiClient
      .textRequest(message)
      .then(response => {
        console.log(response);
        const { speech } = response.result.fulfillment;
        _updateMessageList(speech, 'Budy');
      })
      .catch(err => console.log(err));
  };

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
  chatboxOpened,
  profileOpened,
  messageList,
  body,
  _setProfile,
  _updateMessageList,
  _setType
}) {
  const { message, _handleChange, _handleKeyPress } = useInput(
    _updateMessageList
  );

  return (
    <Container chatboxOpened={chatboxOpened} profileOpened={profileOpened}>
      <Head>Budy</Head>
      <Body ref={body}>
        {messageList.map((item, id) => {
          if (item.type === 'Budy') {
            return (
              <YourMessage
                message={item.message}
                key={id}
                _setProfile={_setProfile}
                _setType={_setType}
              />
            );
          } else if (item.type === 'User') {
            return (
              <MyMessage
                message={item.message}
                key={id}
                _setProfile={_setProfile}
                _setType={_setType}
              />
            );
          } else {
            return null;
          }
        })}
      </Body>
      <Bottom>
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
  opacity: ${({ chatboxOpened }) => (chatboxOpened ? 1 : 0)};
  box-shadow: 0 7px 15px #999;
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
  padding: 20px;
  font-weight: 500;
  font-size: 18px;
  color: white;
  background-color: #298075;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Body = styled.div`
  width: 375px;
  height: 400px;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const Bottom = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
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
