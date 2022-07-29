import React, {FC, useCallback, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemMore from '../components/ItemMore';
import ButtonHistoryBack from '../components/ButtonHistoryBack';
import ButtonReload from '../components/ButtonReload';
import { UseTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { fetchOneFeed } from '../store/actionCreater/fetchFeed';
import styled from 'styled-components';

const DivActive = styled.div`
 margin:10px;
`;
const PageItem:FC = () => {
    const deepEqual  = useCallback(
        (obj1:object, obj2:object) => {
            return JSON.stringify(obj1)===JSON.stringify(obj2);
        },
        [],
    );
    const {FeedItem,error} = UseTypedSelector(state => state.feed,deepEqual );
    const dispatch = useTypedDispatch();
    const {id} = useParams();
    const fetch = useCallback(
      (id:string|undefined) => {
        return dispatch(fetchOneFeed(id));
        },[dispatch],
    );
    const ButtonReloadHandler = useCallback(
      () =>fetch(id),
        [fetch,id],
    );
    useEffect(() => {
      dispatch(fetchOneFeed(id));
      },
        [dispatch, id]);
  if(error){
    return (
      <div>ERROR</div>
    );
  }
  return (
    <div>
      <DivActive><ButtonHistoryBack/><ButtonReload funcSet={ButtonReloadHandler}/></DivActive>
      {FeedItem[0]
      ? <ItemMore key={FeedItem[0].id} Item={FeedItem[0]}></ItemMore>
      : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}
    </div>
  );
};

export default PageItem;
