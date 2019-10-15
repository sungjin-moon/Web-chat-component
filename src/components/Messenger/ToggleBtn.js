import React from 'react';
import styled from 'styled-components';

function ToggleBtn({ toggle, notice, view, _setView, _setNotice }) {
  return (
    <Wrapper>
      <NoticeBubble notice={notice}>Please ask any questions!</NoticeBubble>
      {toggle && (
        <div className="toggleBtn-wrapper">
          {view === null ? (
            <Button
              onClick={() => {
                _setView('home');
                _setNotice(false);
              }}
            >
              <i className="fas fa-sticky-note"></i>
            </Button>
          ) : (
            <Button onClick={() => _setView(null)}>
              <i className="fas fa-times"></i>
            </Button>
          )}
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  .toggleBtn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

const NoticeBubble = styled.div`
  opacity: ${({ notice }) => (notice ? 1 : 0)};
  ::after {
    border-left: 12px solid transparent;
    border-top: 12px solid red;
    bottom: -12px;
    content: '';
    position: absolute;
    right: 15px;
  }
  background-color: red;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.3;
  padding: 10px;
  position: relative;
  right: 57px;
  top: 8px;
  color: white;
`;

const Button = styled.div`
  box-shadow: 0 7px 15px #999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  background-color: #298075;
  width: 70px;
  height: 70px;
  margin: 20px;
`;

export default ToggleBtn;
