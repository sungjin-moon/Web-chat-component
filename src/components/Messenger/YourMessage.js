import React from 'react';
import styled from 'styled-components';

function YourMessage({ message, _setProfile, _setType }) {
  return (
    <Box>
      <UserImg
        onClick={() => {
          _setProfile(true);
          _setType('Budy');
        }}
      />
      <Wrapper>
        <Text>{message}</Text>
        <Date>9m</Date>
      </Wrapper>
    </Box>
  );
}

const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const UserImg = styled.div`
  cursor: pointer;
  border: solid 3px #3e56f2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  background-color: #5266f7;
`;

const Wrapper = styled.div`
  margin-left: 10px;
`;

const Text = styled.div`
  font-size: 14px;
  background-color: #f7f5f7;
  max-width: 270px;
  padding: 15px;
  border-radius: 5px;
`;

const Date = styled.div`
  color: gray;
  font-size: 12px;
  margin-top: 3px;
`;

export default YourMessage;
