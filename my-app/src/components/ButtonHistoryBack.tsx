import React from 'react';
import { useNavigate } from 'react-router-dom';


const ButtonHistoryBack = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}><i className="bi-chevron-left" ></i></button>
    </>
  );
};

export default ButtonHistoryBack;
