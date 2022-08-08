import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FeedItemInterface } from '../types/FeedItemInterface';

const Div = styled.div`
  padding: 10px;
  margin-bottom:0.10em;
  & .foot{
    font-size:12px;
    color:grey;
  }
`;

interface ItemNewsProps {
  Item: FeedItemInterface;
}
const ItemNews: FC<ItemNewsProps> = ({ Item }) => {
  return (
    <Div >
      <div>
        <a href={Item.url}>{Item.title}</a> {' | '}
        <Link to={`/post/${Item.id}`}>  {Item.comments_count? 'comments:'+ Item.comments_count : 'discuss'}</Link>
      </div>
      <div className='foot'>
        rate: {Item.points}{' | '}{Item.user}{' | '}{Item.time_ago} , {Item.type}
      </div>
    </Div>
    ??
    <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>
  );
};

export default ItemNews;
