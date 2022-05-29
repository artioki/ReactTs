/* eslint-disable no-console */
import { FeedAction,FeedActionTypes } from '../../types/TypeReducer';
import { IFeedItem } from '../../types/IFeedItem';
import { Dispatch } from 'redux';

export const fetchFeed = (page:string|undefined,feed:IFeedItem[]) =>{
    return async (dispatch:Dispatch<FeedAction>) =>{
        try{
          const response = await fetch(`https://api.hnpwa.com/v0/newest.json?page=${page}`)
          .then((response) => response.json().then((json) => json as IFeedItem[]))
          .then((json) => {
            return json;
          });
          dispatch({type:FeedActionTypes.FETCH_FEED_SUCCESS,payload:response});
        }catch(e){
          dispatch({type:FeedActionTypes.FETCH_FEED_ERROR,payload:'произошла ошибка при загрузке новостей'});
        }
    };
};


export const fetchOneFeed = (id:string|undefined,feed:IFeedItem[]) =>{
  return async (dispatch:Dispatch<FeedAction>) =>{
      try{
        const response = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
        .then((response) => response.json().then((json) => json as IFeedItem))
        .then((json) => {
          return [json];
        });
        dispatch({type:FeedActionTypes.FETCH_FEED_SUCCESS,payload:response});
      }catch(e){
        dispatch({type:FeedActionTypes.FETCH_FEED_ERROR,payload:'произошла ошибка при загрузке новостей'});
      }
  };
};
