import { IFeedItem } from './IFeedItem';


export interface FeedState{
  iFeedItem:IFeedItem[];
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
  payload:IFeedItem[];
}
interface FetchFeedErrorAction{
  type:FeedActionTypes.FETCH_FEED_ERROR;
  payload:string;
}

export type FeedAction = FetchFeedAction | FetchFeedErrorAction | FetchFeedSuccessAction;

