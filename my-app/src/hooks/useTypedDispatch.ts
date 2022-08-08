import { FeedAction } from '../types/TypeReducer';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type TypedDispatch = ThunkDispatch<FeedAction,never, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
