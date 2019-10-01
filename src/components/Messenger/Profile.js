import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <User>
          <div>
            <div className="profile-userImg"></div>
          </div>
          <div>Emily Gilmore</div>
          <button>User</button>
        </User>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 7px 15px #999;
  border-radius: 10px;
  position: absolute;
  bottom: 115px;
  right: 40px;
  width: 270px;
  height: 585px;
  background-color: white;
`;

const Wrapper = styled.div`
  border-bottom: solid 1px #ddd;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const User = styled.div`
  border: solid 1px;
  text-align: center;
  width: 200px;
  .profile-userImg {
    display: inline-block;
    border: solid 5px #f2cb30;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #f9d954;
  }
`;

export default Profile;
