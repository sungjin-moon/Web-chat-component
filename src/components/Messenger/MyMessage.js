import React from 'react';
import styled from 'styled-components';

function MyMessage({ view, message, _setProfile, _setType }) {
  return (
    <Box>
      <Wrapper>
        <Text view={view}>{message}</Text>
        {/* <Date>9m</Date> */}
      </Wrapper>
      {/* <div className="wrapper">
        <UserImg
          onClick={() => {
            _setProfile(true);
            _setType('User');
          }}
        />
      </div> */}
    </Box>
  );
}

const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

// const UserImg = styled.div`
//   cursor: pointer;
//   border: solid 3px #f2cb30;
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   margin-bottom: 10px;
//   background-color: #f9d954;
// `;

const Wrapper = styled.div`
  margin-right: 10px;
`;

const Text = styled.div`
  font-size: 14px;
  max-width: 270px;
  padding: 15px;
  border-radius: 5px;
  background-color: #298075;
  color: white;
  box-shadow: ${({ view }) =>
    view === 'chatbox-dark' ? '1px 2px 6px #999' : 'none'};
`;

// const Date = styled.div`
//   color: gray;
//   font-size: 12px;
//   margin-top: 3px;
//   text-align: end;
// `;

export default MyMessage;
