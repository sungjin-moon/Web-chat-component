import React from 'react';
import styled from 'styled-components';

function MyMessage({ _setProfile }) {
  return (
    <Box>
      <Wrapper>
        <Text>
          Hi Emily, Dan here from the Enterprise accounts team. How can I help?
        </Text>
        <Date>9m</Date>
      </Wrapper>
      <div className="wrapper">
        <UserImg onClick={() => _setProfile(true)} />
      </div>
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

const UserImg = styled.div`
  cursor: pointer;
  border: solid 3px #3e56f2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  background-color: #5266f7;
`;

const Wrapper = styled.div`
  margin-right: 10px;
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
  text-align: end;
`;

export default MyMessage;
