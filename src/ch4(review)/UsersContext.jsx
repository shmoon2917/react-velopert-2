import React, { createContext, useReducer, useContext } from 'react';
import {
  createAsyncDispatcher,
  initialAsyncState,
  createAsyncHandler,
} from './asyncActionUtils';
import * as api from './api';

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

const usersHandler = createAsyncHandler(GET_USERS, 'users');
const userHandler = createAsyncHandler(GET_USER, 'user');

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
const reducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      return usersHandler(state, action);
    case GET_USER:
    case GET_USER_SUCCESS:
    case GET_USER_ERROR:
      return userHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
};

// State 용 Context 와 Dispatch 용 Context 따로 만들기
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// 위에서 선언한 두 가지 Context 들의 Provier 로 감싸주는 컴포넌트
export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export const useUsersState = () => {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
};

// Dispatch 를 쉽게 사용할 수 있게 해주는 커스텀 Hook
export const useUsersDispatch = () => {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
};

export const getUsers = createAsyncDispatcher(GET_USERS, api.getUsers);
export const getUser = createAsyncDispatcher(GET_USER, api.getUser);
