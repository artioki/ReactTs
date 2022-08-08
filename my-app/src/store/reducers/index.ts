import { feedReducer } from './feedReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    feed: feedReducer,
});
export type rootState = ReturnType<typeof rootReducer>;
