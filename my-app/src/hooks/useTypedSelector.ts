import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootState } from '../store/reducers';

export const UseTypedSelector: TypedUseSelectorHook<rootState> = useSelector;
