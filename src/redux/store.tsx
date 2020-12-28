import { createStore } from 'redux';
import { ProgressReducer } from './reducer';

export const store = createStore(ProgressReducer);