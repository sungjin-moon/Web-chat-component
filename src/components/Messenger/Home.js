import React from 'react';
import styled from 'styled-components';
const budyLogo = process.env.PUBLIC_URL + '/budy.jpeg';

function Home({
  view,
  roomList,
  _setView,
  _setRoomId,
  _createRoom,
  _deleteRoom
}) {
  return (
    <Container view={view}>
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
            {roomList.map((room, id) => (
              <div className="collection-room" key={id}>
                <div
                  className="collection-room-wrapper"
                  onClick={() => {
                    _setView('chatbox');
                    _setRoomId(room.roomId);
                  }}
                />

                <div className="collection-room-box">
                  <img className="collection-room-img" src={budyLogo} alt="" />
                  <div className="collection-room-text">
                    <div className="collection-room-username">
                      <div>{room.messageList[room.messageList.length-1].type}</div>
                      <div
                        id="room-delete"
                        onClick={() => _deleteRoom(room.roomId)}
                      >
                        Delete
                      </div>
                    </div>
                    <div>{room.messageList[room.messageList.length-1].message.slice(0, 30)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="collection-bottom">
            <button onClick={_createRoom}>New conversation</button>
          </div>
        </Collection>
        <Temp></Temp>
        <Temp></Temp>
      </Body>
      <Bottom>
        <i className="fab fa-bootstrap"></i>
        <div>We run on Budy</div>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  display: ${({ view }) => (view === 'home' ? 'block' : 'none')};
  position: relative;
  border-radius: 5px;
  box-shadow: 0 7px 15px #999;
  position: absolute;
  bottom: 122px;
  right: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 6;
  width: 375px;
  min-height: 598px;
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
    font-size: 14px;
    cursor: pointer;
    position: relative;
    :hover {
      background-color: #f9f9f9;
    }
    .collection-room-wrapper {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
    }
    .collection-room-box {
      border-bottom: solid 1px #ddd;
      padding: 15px 0px;
      margin: 0px 20px;
      display: flex;
      .collection-room-img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
      .collection-room-text {
        padding-left: 16px;
        flex: 1 1 0%;
        .collection-room-username {
          display: flex;
          justify-content: space-between;
          color: rgb(115, 115, 118);
          padding-bottom: 5px;
          #room-delete {
            position: relative;
            z-index: 10;
            cursor: pointer;
            :hover {
              color: #3bb5a4;
            }
          }
        }
      }
    }
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
      cursor: pointer;
      outline: none;
    }
  }
`;

const Temp = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 7px 15px #999;
  border-top: solid 3px #37c6b3;
  margin-bottom: 20px;
  height: 300px;
`;
export default Home;
