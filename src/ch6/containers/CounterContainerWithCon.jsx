import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

const CounterContainer = ({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}) => {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
// dispatch 를 파라미터로 받아옵니다.
const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff(diff)),
});

/* mapDispatchtoProps 가 함수가 아니라 객체형태일 때는
   bindActionCreators(액션 생성 함수에 dispatch 를 감싸주는 함수)
  를 자동으로 실행합니다. */
//const mapDispatchToProps = {
//  increase,
//  decrease,
//  setDiff,
//}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
