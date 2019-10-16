import React from 'react';
import styled from 'styled-components';
const budyLogo = process.env.PUBLIC_URL + '/budy.jpeg'

function YourMessage({ message, view, _setProfile, _setType }) {
  return (
    <Box>
      <div className="yourMessage-wrapper">
        <UserImg
          src={budyLogo}
          onClick={() => {
            _setProfile(true);
            _setType('Budy');
          }}
        />
        <div className="yourMessage-username">Budy</div>
      </div>

      <Wrapper>
        <Text view={view}>{message}</Text>
        {/* <Date>9m</Date> */}
      </Wrapper>
    </Box>
  );
}

const Box = styled.div`
  margin-bottom: 20px;
  .yourMessage-wrapper {
    display: flex;
    .yourMessage-username {
      padding: 5px;
    }
  }
`;

const UserImg = styled.img`
  display: block;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const Wrapper = styled.div`
  display: inline-block;
  margin-left: 27px;
`;

const Text = styled.div`
  font-size: 14px;
  background-color: ${({ view }) =>
    view === 'chatbox-dark' ? 'white' : 'rgb(238, 241, 244)'};
  max-width: 270px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: ${({ view }) =>
    view === 'chatbox-dark' ? '1px 2px 6px #999' : 'none'};
`;

// const Date = styled.div`
//   color: gray;
//   font-size: 12px;
//   margin-top: 3px;
// `;

export default YourMessage;
