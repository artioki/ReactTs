import React, { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

const Button = styled.button`
  & {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 3px;
    border:1px gray solid;
  }
  &:hover {
    background-color: #4CAF50; /* Green */
    color: white;
  }
`;
interface ItemCommentProps{
    funcSet:()=>void;
  }

const ButtonReload:FC<ItemCommentProps> = ({funcSet}) => {
  const second = useContext(Context);
  useEffect(() => {
    if(second % 60 === 0){
      funcSet();
    }
  }, [funcSet, second]);

  return (
    <>
      <Button onClick={() => funcSet()}><i className="bi bi-arrow-counterclockwise"></i></Button>
    </>
  );
};

export default ButtonReload;
