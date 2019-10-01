import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Messenger from './components/Messenger/index';

function App() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Messenger />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: solid 1px;
  height: 100%;
`;
const Container = styled.div`
  border: solid 1px;
  position: relative;
  height: 100%;
  margin: 0 auto;
  max-width: 1400px;
  background-color: #f5f0ec;
`;

export default App;
