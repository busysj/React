import React from "react";
import { Link } from "react-router-dom";

// 쿼리스트링 ?로 시작하고 키=값 한 쌍으로 들어오는 값
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Test = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const num = searchParams.get("num");
  const username = searchParams.get("username");

  return (
    <div>
      <h1>테스트 화면</h1>
      <Link to="/">홈으로</Link>
      <p>쿼리스트링 : {location.search}</p>
      <p> useSearchParams : {num}</p>
      {
        /* 주소로 test?username=green 이 들어왔을 때
        아래에 환영합니다가 출력되고 그 외에는 출력이 되지 않게 JSX로 작성
        if문을 간단하게 쓰기위해 ? : 와 같은 삼항 연산자나 && || 연산자 사용 
        ? 대신에 && 연산자를 사용하면 참일 때 뒤에 작성한 태그를 출력
        ? 대신에 || 연산자를 사용하면 거짓(값이 없을 때)일 때 뒤에 작성한 태그를 출력 */
        username === "green" ? <p>환영합니다</p> : <p></p>
      }
    </div>
  );
};

export default Test;
