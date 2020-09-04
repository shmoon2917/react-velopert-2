import { AsyncActionCreatorBuilder, getType } from 'typesafe-actions';
import { AnyAction } from 'redux';

export type AsyncState<T, E = any> = {
  data: T | null;
  loading: boolean;
  error: E | null;
};

export const asyncState = {
  initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initialData || null,
    error: null,
  }),
  load: <T, E = any>(data?: T): AsyncState<T, E> => ({
    loading: true,
    data: data || null,
    error: null,
  }),
  success: <T, E = any>(data: T): AsyncState<T, E> => ({
    loading: false,
    data,
    error: null,
  }),
  error: <T, E>(error: E): AsyncState<T, E> => ({
    loading: false,
    data: null,
    error: error,
  }),
};

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
export const createAsyncReducer = <
  S,
  AC extends AnyAsyncActionCreator,
  K extends keyof S
>(
  asyncActionCreator: AC,
  key: K
) => {
  return (state: S, action: AnyAction) => {
    // 각 액션 생성함수의 type 추출
    const [request, success, failure] = [
      asyncActionCreator.request,
      asyncActionCreator.success,
      asyncActionCreator.failure,
    ].map(getType);
    switch (action.type) {
      case request:
        return {
          ...state,
          [key]: asyncState.load(),
        };
      case success:
        return {
          ...state,
          [key]: asyncState.success(action.payload),
        };
      case failure:
        return {
          ...state,
          [key]: asyncState.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const transformToArray = <AC extends AnyAsyncActionCreator>(
  asyncActionCreator: AC
) => {
  const { request, success, failure } = asyncActionCreator;
  return [request, success, failure];
};
