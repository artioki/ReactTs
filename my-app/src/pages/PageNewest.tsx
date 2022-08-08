import React, {FC, useCallback, useEffect} from 'react';
import ItemNews from '../components/ItemNews';
import { FeedItemInterface } from '../types/FeedItemInterface';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import ButtonReload from '../components/ButtonReload';
import { fetchFeed } from '../store/actionCreater/fetchFeed';
import { UseTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
const I = styled.i`
  transition-duration: 0.4s;
  border-radius: 3px;
  border:1px gray solid;
  &:hover {
    background-color: #4CAF50;
    color: white;
  }
`;
const Div = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  height: 1em;
  font-size:20px;
  font-style: normal;
  & a{
    margin:0 1em;
  }
`;
const DivActive = styled.div`
 margin:10px;
`;
const PageHome: FC = () => {
  const deepEqual  = useCallback(
      (obj1:object, obj2:object) => {
        return JSON.stringify(obj1)===JSON.stringify(obj2);
      },
      [],
  );
  const {FeedItem,error} = UseTypedSelector(state => state.feed,deepEqual);
  const {page} = useParams();
  const dispatch = useTypedDispatch();
  const fetch = useCallback(
      (page:string|undefined) => {
          return dispatch(fetchFeed(page));
      },
      [dispatch],
  );
    const ButtonReloadHandler = useCallback(
        () =>fetch(page),
        [fetch, page],
    );
  useEffect(() => {
    dispatch(fetchFeed(page));
  }, [page, dispatch,FeedItem]);
  if(error){
    return (
      <div>ERROR</div>
    );
  }
  return (
    <>
      <DivActive><ButtonReload funcSet={ButtonReloadHandler}/></DivActive>
      <Div>
          {(Number(page)-1 > 0) ? <Link to={`/newest/${Number(page)-1 }`}><I className="bi-chevron-left" ></I></Link> : <></>}
          <>page {page}</>
          {(Number(page)+1 < 11) ?<Link to={`/newest/${Number(page)+1 }`}><I className="bi-chevron-right"></I></Link>: <></>}
      </Div>
      <div>
        {FeedItem
        ? FeedItem.map((item: FeedItemInterface) => <ItemNews key={item.id} Item={item}></ItemNews>)
        : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}
      </div>
    </>
  );
};

export default PageHome;
