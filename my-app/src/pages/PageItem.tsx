import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemMore from '../components/ItemMore';
import { IFeedItem } from '../types/IFeedItem';
import ButtonHistoryBack from '../components/ButtonHistoryBack';
import ButtonReload from '../components/ButtonReload';

const PageItem:FC = () => {
  const [item, setitem] = useState<IFeedItem>();
  const {id} = useParams();
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line no-console
    console.log(item);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  async function fetchNews() {
  try{
    const response = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
    .then(response => response.json().then(json => json as IFeedItem))
    .then(json => {
      // eslint-disable-next-line no-console
      //console.log(json,'sss');
      setitem(json);
    });
    }catch(e){
      alert(e);
    }
  }
  return (
    <div>
      <div><ButtonHistoryBack/><ButtonReload funcSet={fetchNews}/></div>
      {item
      ? <ItemMore key={item.id} Item={item}></ItemMore>
      : <div className="spinner-border" role="status"> <span className="sr-only"></span> </div>}
    </div>
  );
};

export default PageItem;
