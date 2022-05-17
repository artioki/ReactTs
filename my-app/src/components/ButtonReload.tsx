/* eslint-disable no-console */
import React, { FC } from 'react';
interface ItemCommentProps{
    funcSet:()=>void;
  }

const ButtonReload:FC<ItemCommentProps> = ({funcSet}) => {
  const time = () => {setInterval(function(){ time();funcSet();}, 60000);};
  time();
  return (
    <>
      <button onClick={() => funcSet()}><i className="bi bi-arrow-counterclockwise"></i></button>
    </>
  );
};

export default ButtonReload;
