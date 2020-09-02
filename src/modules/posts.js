import * as postsAPI from '../api/posts';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
} from '../lib/asyncUtils';

/* 액션 타입 */
// 포스트 여러개 조회하기
export const GET_POSTS = 'GET_POSTS'; // 요청 시작
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

// 포스트 비우기
// const CLEAR_POST = 'CLEAR_POST';
// export const clearPost = () => ({ type: CLEAR_POST });

/* chunk 함수 - API 비동기 처리 */
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};

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

    // 포스트 조회시 재로딩 이슈 해결법 1
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
