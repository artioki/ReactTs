import React, {FC, useCallback, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemMore from '../components/ItemMore';
import { IFeedItem } from '../types/IFeedItem';
import ButtonHistoryBack from '../components/ButtonHistoryBack';
import ButtonReload from '../components/ButtonReload';
import { shallowEqual } from 'react-redux';
import { UseTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { fetchOneFeed } from '../store/actionCreater/fetchFeed';
import styled from 'styled-components';

const DivActive = styled.div`
 margin:10px;
`;
const PageItem:FC = () => {

  const {iFeedItem,error} = UseTypedSelector(state => state.feed,shallowEqual);
  const dispatch = useTypedDispatch();
  const {id} = useParams();

  const fetch = useCallback(
      (id:string|undefined,iFeedItem:IFeedItem[]) => {
        return () => dispatch(fetchOneFeed(id,iFeedItem));
      },[dispatch],
  );
  useEffect(() => {
    dispatch(fetchOneFeed(id,iFeedItem));
  }, [id, dispatch, iFeedItem]);
  if(error){
    return (
      <div>ERROR</div>
    );
  }
  return (
    <div>
      <DivActive><ButtonHistoryBack/><ButtonReload funcSet={fetch(id,iFeedItem)}/></DivActive>
      {iFeedItem[0]
      ? <ItemMore key={iFeedItem[0].id} Item={iFeedItem[0]}></ItemMore>
      : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}
    </div>
  );
};

export default PageItem;
