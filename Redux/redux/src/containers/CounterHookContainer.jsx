// 리덕스는 Hook 이전에 생긴 라이브러리.
// 리액트 16.8 버전에서 Hook이 도입되면서 Hook을 이용한 내용이 추가
// 현 리액트 18.0 버전

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterHookContainer = () => {
  // state에 접근하기 위해 useSelector 사용
  const number = useSelector((state) => state.counter.number);
  // dispatch를 사용하기 위해 useDispatch 사용
  const dispatch = useDispatch();

  //Callback 함수를 이용해서 최적화 : 함수 새로 만듦 방지
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterHookContainer;
