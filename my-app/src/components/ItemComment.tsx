import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FeedItemInterface } from '../types/FeedItemInterface';



const Div = styled.div`
  padding: 0 10px;
  margin-bottom:20px;
  margin-top:0.1em;
  & a:hover{
    color:red;
  }
  & .foot{
    font-size:12px;
    color:grey;
  }
  & p{
      margin-bottom:0.25em;
  }
  &.notFirstCommentLevel{
    border-left: 2px solid green;
    margin-left:7px;
    padding-left:20px;
  }
  & .hv{
    cursor:pointer;
    display: flex;
    color:grey;
    padding-bottom:5px;
    & strong{
      color:green;
      font-weight:600;
    }
    &:hover{
      color:green;
    }
  }
`;

interface WrapCommentProps{
  wrapper:string;
  commentWrapper:string;
}
const WrapComment:FC<WrapCommentProps> = ({wrapper,commentWrapper}) =>{
  return(
    <>
    <strong>{wrapper}</strong>
    {commentWrapper}
    </>
  );
};
interface ItemCommentProps{
  Item: FeedItemInterface;
  firstCommentLevel?:boolean;
  hides?:boolean;
}
const ItemComment:FC<ItemCommentProps> = ({Item,firstCommentLevel = true,hides }) => {
  const [hideChild, setHideChild] = useState<boolean>(true);
  const clickHandler = () =>{
    setHideChild(state => !state);
  };
  return (
    <>
    <Div className={firstCommentLevel?'':'notFirstCommentLevel'} style={{display:hides?'none':'block'}} >
      <div className='foot'>
        {Item.user} {' | '} {Item.time_ago} {' | '} {Item.type}
      </div>
      <div dangerouslySetInnerHTML={{__html: Item.content}}></div>
      {Item.comments_count
        ? <div className='hv' onClick={clickHandler} style={{display:hides?'none':'inline-block'}}>
          {hideChild
            ?<WrapComment wrapper={`[${Item.comments_count}]`} commentWrapper=' открыть ветку'></WrapComment>
            :<WrapComment wrapper={'[-]'} commentWrapper=' скрыть ветку'></WrapComment>
          }
        </div>
        : null
      }
      {Item.comments
          ? Item.comments.map((item:FeedItemInterface) =>  (<ItemComment key={item.id} Item={item} firstCommentLevel={false} hides={hideChild}/>))
          : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}
    </Div>
    </>

  );
};

export default ItemComment;
