import React, { FC, useEffect, useState } from 'react';
import ItemNews from '../components/ItemNews';
import { IFeedItem } from '../types/IFeedItem';

const PageHome: FC = () => {
  const [news, setnews] = useState<IFeedItem[]>([]);
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line no-console
    console.log(news);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function fetchNews() {
    try {
      const response = await fetch('https://api.hnpwa.com/v0/newest/1.json')
        .then((response) => response.json().then((json) => json as IFeedItem[]))
        .then((json) => {
          // eslint-disable-next-line no-console
          console.log(json);
          setnews(json);
        });
    } catch (e) {
      alert(e);
    }
  }
  return <div>{news ? news.map((item: IFeedItem) => <ItemNews key={item.id} Item={item}></ItemNews>) : 'sss'}</div>;
};

export default PageHome;
