import { FeedAction, FeedActionTypes, FeedState } from '../../types/TypeReducer';


const initialState:FeedState ={
  iFeedItem:[],
  loading:false,
  error:null,
};

export const feedReducer = (state=initialState,action:FeedAction):FeedState =>{
  switch (action.type) {
    case FeedActionTypes.FETCH_FEED:
        return {loading:true,error:null,iFeedItem:[]};
    case FeedActionTypes.FETCH_FEED_SUCCESS:
        return {loading:false,error:null,iFeedItem:action.payload};
    case FeedActionTypes.FETCH_FEED_ERROR:
        return {loading:false,error:action.payload,iFeedItem:[]};
    default:
      return state;
  }
};
