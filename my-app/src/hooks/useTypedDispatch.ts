import { FeedAction } from './../types/TypeReducer';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type TypedDispatch = ThunkDispatch<FeedAction,any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
