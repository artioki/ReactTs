import React, { FC, useEffect, useState } from 'react';
import ItemNews from '../components/ItemNews';
import { IFeedItem } from '../types/IFeedItem';
import styled from 'styled-components';
import { Link, Navigate, useParams } from 'react-router-dom';
import ButtonHistoryBack from '../components/ButtonHistoryBack';
import ButtonReload from '../components/ButtonReload';
const I = styled.i`
  height: 1em;
  font-size:20px;
  font-style: normal;
`;
const Div = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  padding:'2em'
`;
const PageHome: FC = () => {
  const [news, setnews] = useState<IFeedItem[]>([]);
  const {page} = useParams();
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line no-console
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  async function fetchNews() {
    try {
      const response = await fetch(`https://api.hnpwa.com/v0/newest.json?page=${page}`)
        .then((response) => response.json().then((json) => json as IFeedItem[]))
        .then((json) => {
          // eslint-disable-next-line no-console
          //console.log(json,'ddd');
          setnews(json);
        });
    } catch (e) {
      alert(e);
    }
  }
  return (
    <>
      <div><ButtonReload funcSet={fetchNews}/></div>
      <Div>
        <>
          {(Number(page)-1 > 0) ? <Link to={`/newest/${Number(page)-1 }`}><I className="bi-chevron-left" ></I></Link> : <></>}
          <I ><>page {page}</></I>
          {(Number(page)+1 < 11) ?<Link to={`/newest/${Number(page)+1 }`}><I className="bi-chevron-right"></I></Link>: <></>}
        </>
      </Div>
      <div>{news
      ? news.map((item: IFeedItem) => <ItemNews key={item.id} Item={item}></ItemNews>)
      : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}</div>
      <Div>
        <>
          {(Number(page)-1 > 0) ? <Link to={`/newest/${Number(page)-1 }`}><I className="bi-chevron-left" ></I></Link> : <></>}
          <I ><>page {page}</></I>
          {(Number(page)+1 < 11) ?<Link to={`/newest/${Number(page)+1 }`}><I className="bi-chevron-right"></I></Link>: <></>}
        </>
      </Div>
    </>
  );
};

export default PageHome;
