// 리덕스 사용을 위한 초기 상태와 리듀서 함수 만들기

// 액션 : 액션이름 = "모듈이름/액션이름" 으로 구성
// 대문자로 작성된 변수이름의 특징 : 변하지 않는 값일 때 = 상수, ex) 3.14.... = PI
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 변화값을 쓰기위한 액션 이름 추가
const SETDIFF = "counter/SETDIFF";
const DIFF = "counter/DIFF";

// 액션 함수 : 액션에 들어갈 값이 바뀔 때 쉽게 사용하기 위함
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SETDIFF, payload: diff });
export const onDiff = () => ({ type: DIFF });

// 초기 상태
const initialState = {
  number: 0,
  diff: 0,
};

// 리듀서 함수, 상태값을 변화시키는 함수
// 이 때 state는 기본값을 넣어서 사용
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    case SETDIFF:
      return {
        ...state,
        diff: parseInt(action.payload),
      };
    case DIFF:
      return {
        ...state,
        number: state.number + state.diff,
      };
    default:
      return state;
  }
}

export default counter;
