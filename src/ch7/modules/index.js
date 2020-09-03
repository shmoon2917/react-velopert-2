import { combineReducers } from 'redux';
import posts from './posts';
import { all } from 'redux-saga/effects';
import { postsSaga } from './postsWithSaga';

const rootReducer = combineReducers({ posts });
export function* rootSaga() {
  yield all([postsSaga()]);
}

export default rootReducer;
