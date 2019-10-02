import React from 'react';
import styled from 'styled-components';

const YourMessage = ({_setIsOpened}) => {
  return (
    <Box>
      <UserImg onClick={() => _setIsOpened(true)}/>
      <Wrapper>
        <Text>
          Hey, can I connect with someone about pricing for Enterprise plans?
        </Text>
        <Date>9m</Date>
      </Wrapper>
    </Box>
  );
};

const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const UserImg = styled.div`
  cursor: pointer;
  border: solid 3px #f2cb30;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  background-color: #f9d954;
`;

const Wrapper = styled.div`
  margin-left: 10px;
`

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
`

export default YourMessage;
