import { useReducer, useEffect } from 'react';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        data: null,
        error: null,
        isLoading: true,
      };
    }
    case SUCCESS: {
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: LOADING });
    try {
      const data = await callback();
      dispatch({ type: SUCCESS, data });
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
};

export default useAsync;
