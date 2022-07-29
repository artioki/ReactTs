import { FeedItemInterface } from './FeedItemInterface';


export interface FeedState{
  FeedItem:FeedItemInterface[];
  loading:boolean;
  error:null| string;
}
export enum FeedActionTypes{
  FETCH_FEED ='FETCH_FEED',
  FETCH_FEED_SUCCESS ='FETCH_FEED_SUCCESS',
  FETCH_FEED_ERROR = 'FETCH_FEED_ERROR'
}
interface FetchFeedAction{
  type:FeedActionTypes.FETCH_FEED;
}
interface FetchFeedSuccessAction{
  type:FeedActionTypes.FETCH_FEED_SUCCESS;
  payload:FeedItemInterface[];
}
interface FetchFeedErrorAction{
  type:FeedActionTypes.FETCH_FEED_ERROR;
  payload:string;
}

export type FeedAction = FetchFeedAction | FetchFeedErrorAction | FetchFeedSuccessAction;

