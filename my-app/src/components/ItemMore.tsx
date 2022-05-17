import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { IFeedItem } from '../types/IFeedItem';
import ItemComment from './ItemComment';
import ItemNews from './ItemNews';

interface ItemMoreProps {
  Item: IFeedItem;
}
const Div = styled.div`
  padding: 10px;
  margin-bottom:0.10em;
  & .foot{
    font-size:12px;
    color:grey;
  }
`;
const ItemMore: FC<ItemMoreProps> = ({Item})=> {
  return (
    <>
    <ItemNews key={Item.id} Item={Item}></ItemNews>
    {Item.comments
      ? Item.comments.map((item:IFeedItem) =>  (<ItemComment key={item.id} Item={item}/>))
      : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}
    </>
  );
};

export default ItemMore;
