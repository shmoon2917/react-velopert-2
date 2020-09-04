import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import { getUserProfileAsync } from './actions';
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from '../../lib/reducerUtils';

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

const githubReducer = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUserProfileAsync),
  createAsyncReducer(getUserProfileAsync, 'userProfile')
);

export default githubReducer;
