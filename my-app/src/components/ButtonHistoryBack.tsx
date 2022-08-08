import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  transition-duration: 0.4s;
  border-radius: 3px;
  border:1px gray solid;
  &:hover {
    background-color: #4CAF50;
    color: white;
  }
`;
const ButtonHistoryBack = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)}><i className="bi-chevron-left" ></i></Button>
    </>
  );
};

export default ButtonHistoryBack;
