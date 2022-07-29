import { FeedAction, FeedActionTypes, FeedState } from '../../types/TypeReducer';


const initialState:FeedState ={
  FeedItem:[],
  loading:false,
  error:null,
};

export const feedReducer = (state=initialState,action:FeedAction):FeedState =>{
  switch (action.type) {
    case FeedActionTypes.FETCH_FEED:
        return {loading:true,error:null,FeedItem:[]};
    case FeedActionTypes.FETCH_FEED_SUCCESS:
        return {loading:false,error:null,FeedItem:action.payload};
    case FeedActionTypes.FETCH_FEED_ERROR:
        return {loading:false,error:action.payload,FeedItem:[]};
    default:
      return state;
  }
};
