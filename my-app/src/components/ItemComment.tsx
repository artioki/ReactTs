import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { IFeedItem } from '../types/IFeedItem';



const Div = styled.div`
  padding: 0px 10px;
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
  &.second{
    border-left: 2px solid green;
    margin-left:7px;
    padding-left:20px;
  }
  & .hv{
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
  strStrong:string;
  str:string;
}
const WrapComment:FC<WrapCommentProps> = ({strStrong,str}) =>{
  return(
    <>
    <strong>{strStrong}</strong>
    {str}
    </>
  );
};
interface ItemCommentProps{
  Item: IFeedItem;
  first?:boolean;
  hides?:boolean|undefined;
}
const ItemComment:FC<ItemCommentProps> = ({Item,first = true,hides = undefined}) => {
  const [hide, sethide] = useState<boolean>(true);
  let hideis = hides;
  const clickHandler = (e:React.MouseEvent<HTMLParagraphElement>) =>{
    sethide(!hide);
  };
  return (
    <>
    <Div className={first?'':'second'} style={{display:hideis?'none':'block'}} >
      <div className='foot'>
        {Item.user} {' | '} {Item.time_ago}{' | '} {Item.type}
      </div>
      <div dangerouslySetInnerHTML={{__html: Item.content}}></div>
      {Item.comments_count
      ?<div className='hv' onClick={clickHandler} style={{display:hideis?'none':'block'}}>
        {hide
        ?<WrapComment strStrong={`[${Item.comments_count}]`} str=' открыть ветку'></WrapComment>
        :<WrapComment strStrong={'[-]'} str=' скрыть ветку'></WrapComment>
        }
      </div>
      :''
      }
      {Item.comments
      ? Item.comments.map((item:IFeedItem) =>  (<ItemComment key={item.id} Item={item} first={false} hides={hide}/>))
      : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}
    </Div>
    </>

  );
};

export default ItemComment;
