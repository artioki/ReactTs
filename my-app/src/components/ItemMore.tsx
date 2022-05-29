import React, { FC } from 'react';
import { IFeedItem } from '../types/IFeedItem';
import ItemComment from './ItemComment';
import ItemNews from './ItemNews';

interface ItemMoreProps {
  Item: IFeedItem;
}

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
