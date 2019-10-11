import React, { useState } from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Head>
        <div>
          <i className="fab fa-bootstrap fa-3x"></i>
        </div>
        <div className="home-title">Hi, we're Budy</div>
        <div className="home-text">
          We help your business grow by
          <br />
          connecting you to your cunstomers.
        </div>
      </Head>
      <Body>
        <FakeBox />
        <Collection>
          <div className="collection-top">
            <div>Your conversations</div>
            <div className="collection-allView">See all</div>
          </div>
          <div className="collection-body">
            <div className="collection-room">Room</div>
            <div className="collection-room">Room</div>
          </div>
          <div className="collection-bottom">
            <button>New conversation</button>
          </div>
        </Collection>
        <Collection />
        <Collection />
      </Body>
      <Bottom>
        <i className="fab fa-bootstrap"></i>
        <div>We run on Budy</div>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: 0 7px 15px #999;
  position: absolute;
  bottom: 122px;
  right: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 5;
  width: 375px;
  height: 600px;
  background-color: #f9f9f9;
`;

const Head = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #298075;
  padding: 20px 40px 100px 40px;
  color: white;
  font-weight: 500;
  .home-title {
    font-size: 1.5rem;
    padding: 10px 0px;
  }
  .home-text {
    line-height: 25px;
    opacity: 0.7;
  }
`;

const Body = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0px 20px;
`;

const Bottom = styled.div`
  background-color: white;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 13px;
  color: gray;
  display: flex;
  justify-content: center;
  div {
    padding: 3px 0px;
    margin-left: 5px;
  }
  i {
    color: #298075;
    font-size: 20px;
  }
`;

const FakeBox = styled.div`
  height: 190px;
`;

const Collection = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 7px 15px #999;
  border-top: solid 3px #37c6b3;
  margin-bottom: 20px;
  .collection-top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 20px 0px 20px;
    .collection-allView {
      color: #3bb5a4;
    }
  }
  .collection-room {
    border-bottom: solid 1px #ddd;
    padding: 20px 0px;
    margin: 0px 20px;
  }
  .collection-bottom {
    margin: 0px 20px;
    padding: 20px 0px;
    button {
      background-color: white;
      border: solid 1px #37c6b3;
      border-radius: 30px;
      color: #37c6b3;
      padding: 10px;
    }
  }
`;
export default Home;
