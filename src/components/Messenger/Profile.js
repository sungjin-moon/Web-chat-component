import React from 'react';
import styled from 'styled-components';

function Profile({ profileOpened, _setProfile }) {
  return (
    <Container profileOpened={profileOpened}>
      <div className="profile-close">
        <Close onClick={() => _setProfile(false)}>X</Close>
      </div>
      <User>
        <div>
          <UserImg border="#f2cb30" background="#f9d954" line="3px" />
        </div>
        <div>Emily Gilmore</div>
        <button>User</button>
      </User>
      <Latest>
        <div>Latest Conversations</div>
        <div className="latest-wrapper">
          <UserImg
            width="20px"
            height="20px"
            border="#3e56f2"
            background="#5266f7"
            line="2px"
          />
          <div>fasfasfasf</div>
        </div>
        <div className="latest-wrapper">
          <UserImg
            width="20px"
            height="20px"
            border="red"
            background="#f74747"
            line="2px"
          />
          <div>qwfasasg</div>
        </div>
      </Latest>
      <Details>
        <div>Details</div>
        <div>
          <span className="details-label">Location</span>
          <span>London</span>
        </div>
        <div>
          <span className="details-label">Industy</span>
          <span>Education</span>
        </div>
        <div>
          <span className="details-label">Company Size</span>
          <span>>100</span>
        </div>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  opacity: ${({ profileOpened }) => (profileOpened ? 1 : 0)};
  .profile-close {
    text-align: end;
    padding: 10px;
  }
  box-shadow: 0 7px 15px #999;
  border-radius: 10px;
  position: absolute;
  bottom: 120px;
  right: 40px;
  background-color: white;
  z-index: 5;
  transition: transform 1s, opacity 1s;
  transform: ${({ profileOpened }) =>
    profileOpened ? 'translateX(0px)' : 'translateX(580px)'};
`;

const Close = styled.span`
  cursor: pointer;
`;

const User = styled.div`
  border-bottom: solid 1px #ddd;
  text-align: center;
  padding: 0px 30px 30px 30px;
  width: 270px;
  div {
    :nth-child(2) {
      font-weight: normal;
      font-size: 18px;
      margin: 10px 0px;
    }
  }
  button {
    cursor: pointer;
    background-color: white;
    outline: none;
    border: solid 1px gray;
    border-radius: 3px;
    padding: 3px 10px;
    color: gray;
  }
`;

const UserImg = styled.div`
  display: inline-block;
  border: solid ${({ line }) => line} ${({ border }) => border};
  border-radius: 50%;
  width: ${({ width }) => (width ? width : '50px')};
  height: ${({ height }) => (height ? height : '50px')};
  background-color: ${({ background }) => background};
  margin: 0;
`;

const Latest = styled.div`
  padding: 20px;
  border-bottom: solid 1px #ddd;
  height: 150px;
  div:first-child {
    font-weight: 500;
    font-size: 14px;
  }
  .latest-wrapper {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    div:last-child {
      margin-left: 5px;
    }
  }
`;

const Details = styled.div`
  padding: 20px;
  font-size: 14px;
  height: 280px;
  div {
    margin-bottom: 10px;
    :last-child {
      margin: 0;
    }
    :first-child {
      font-weight: 500;
    }
  }
  .details-label {
    color: gray;
    margin-right: 10px;
  }
`;

export default Profile;
