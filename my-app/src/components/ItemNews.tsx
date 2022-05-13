import React, { FC } from 'react';
import { IFeedItem } from '../types/IFeedItem';

interface ItemNewsProps {
  Item: IFeedItem;
}
const ItemNews: FC<ItemNewsProps> = ({ Item }) => {
  return (
    <div style={{ padding: 10, border: '1px solid blue' }}>
      {Item.title} <hr /> рейтинг:{Item.points} ,автор: {Item.user}, время:{Item.time_ago} , {Item.type}
    </div>
  );
};

export default ItemNews;
