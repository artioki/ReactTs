import { FeedAction,FeedActionTypes } from '../../types/TypeReducer';
import { FeedItemInterface } from '../../types/FeedItemInterface';
import { Dispatch } from 'redux';

export const fetchFeed = (page:string|undefined) =>{
  return async (dispatch:Dispatch<FeedAction>) =>{
    try{
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/newest/${page}.json`)
          .then((response) => response.json().then((json) => json as FeedItemInterface[]))
          .then((json) => {
            return json;
          });
      dispatch({type:FeedActionTypes.FETCH_FEED_SUCCESS,payload:response});
    }catch(e){
      dispatch({type:FeedActionTypes.FETCH_FEED_ERROR,payload:'произошла ошибка при загрузке новостей'});
    }
  };
};


export const fetchOneFeed = (id:string|undefined) =>{
  return async (dispatch:Dispatch<FeedAction>) =>{
      try{
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/item/${id}.json`)
        .then((response) => response.json().then((json) => json as FeedItemInterface))
        .then((json) => {
          return [json];
        });
        dispatch({type:FeedActionTypes.FETCH_FEED_SUCCESS,payload:response});
      }catch(e){
        dispatch({type:FeedActionTypes.FETCH_FEED_ERROR,payload:'произошла ошибка при загрузке новостей'});
      }
  };
};
