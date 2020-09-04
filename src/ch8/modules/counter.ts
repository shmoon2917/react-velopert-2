import { createAction, createReducer, ActionType } from 'typesafe-actions';

// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';
// const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction('counter/INCREASE')();
export const decrease = createAction('counter/DECREASE')();
export const increaseBy = createAction('counter/INCREASE_BY')<number>();

// 액션 객체 타입 준비
const actions = { increase, decrease, increaseBy }; // 모든 액션 생성함수들을 actions 객체에 넣습니다
type CounterAction = ActionType<typeof actions>;

// 이 리덕스 모듈에서 관리할 상태의 타입을 선언합니다
type CounterState = {
  count: number;
};

// 초기 상태를 선언합니다.
const initialState: CounterState = {
  count: 0,
};

// 객체 형태로 작성
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: (state) => ({ count: state.count + 1 }),
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

// 메서드 체이닝 방식으로 작성
// 리듀서를 만듭니다
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, { payload: id }) => ({
    count: state.count + id,
  }));

export default counter;
