import { createStore } from 'redux';
import { Reducer } from './counterReducer';

export const store = createStore(Reducer);