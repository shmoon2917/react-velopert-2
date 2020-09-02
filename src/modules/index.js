import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import posts from './postsSaga';
import { all } from 'redux-saga/effects';
import { postsSaga } from './postsSaga';

const rootReducer = combineReducers({ counter, posts });

export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;
