import React, { FC } from 'react';
import { IFeedItem } from '../types/IFeedItem';

interface ItemMoreProps {
  Item: IFeedItem;
  P?:number;
}
const ItemMore: FC<ItemMoreProps> = ({ Item ,P = 10}) => {
  return (
    <div style={{ padding: 10,paddingLeft:P }}>
      автор:{Item.user}, время:{Item.time_ago}, {Item.type} <hr /> <div dangerouslySetInnerHTML={{__html: Item.content}}></div>
      {Item.comments ? Item.comments.map((item:IFeedItem) =>  (<ItemMore key={item.id} Item={item} P={P+10}/>)) : 'ss'}
    </div>
  );
};

export default ItemMore;
