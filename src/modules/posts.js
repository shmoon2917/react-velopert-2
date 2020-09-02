import * as postAPI from '../api/posts';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseThunkById,
} from '../lib/asyncUtils';

/* 액션 타입 */
// 포스트(들) 조회하기
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
// 포스트 비우기
// const CLEAR_POST = 'CLEAR_POST';

export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postAPI.getPostById);

export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};

// export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post')(state, action);
    // case CLEAR_POST:
    //   return {
    //     ...state,
    //     post: reducerUtils.initial(),
    //   };
    default:
      return state;
  }
};

export default posts;
