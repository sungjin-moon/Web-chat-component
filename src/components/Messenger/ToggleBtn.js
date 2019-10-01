import React from 'react';
import styled from 'styled-components';

const ToggleBtn = () => {
  return (
    <Button>
      <i className="fas fa-sticky-note"></i>
    </Button>
  );
};

const Button = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  background-color: #f9d954;
  width: 70px;
  height: 70px;
  margin: 20px;
`;

export default ToggleBtn;
