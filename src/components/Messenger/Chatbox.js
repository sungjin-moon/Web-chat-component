import React from 'react';
import styled from 'styled-components';
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';

const Chatbox = () => {
  return (
    <Container>
      <Head>Emily Gilmore</Head>
      <Body>
        <MyMessage />
        <YourMessage />
        <MyMessage />
        <YourMessage />
        <MyMessage />
        <YourMessage />
      </Body>
      <Bottom>
        <UserInput>
          <textarea
            className="chatbox-text"
            name="message"
            cols="30"
            rows="1"
          ></textarea>
          {/* <div id="send">
            <i class="fas fa-location-arrow"></i>
          </div> */}
        </UserInput>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 7px 15px #999;
  position: absolute;
  bottom: 140px;
  right: 135px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Head = styled.div`
  padding: 20px;
  font-weight: 500;
  font-size: 18px;
  background-color: #f9d954;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Body = styled.div`
  height: 400px;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
  width: 400px;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const Bottom = styled.div`
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
