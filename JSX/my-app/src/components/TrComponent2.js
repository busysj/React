const TrComponent2 = (props) => {
  // props로 값을 받아와서 사용 및 출력
  return props.login ? (
    <div>
      <div>
        <h1>로그인에 성공하였습니다</h1>
        <h3>홍길동 입니다</h3>
      </div>
    </div>
  ) : (
    <div>
      <h1>로그인이 필요합니다</h1>
      <h3>홍길동입니다</h3>
      <p>{props.login}</p>
    </div>
  );
};

export default TrComponent2;
