import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈 화면입니다</p>
      {/* a태그와 동일하게 생각 */}
      <Link to="/about">소개</Link>
      <br />
      <Link to="/test">테스트</Link>
      <br />
      <Link to="/profile/ysj">프로필</Link>
      <br />
      <Link to="/boardlist">리스트</Link>
    </div>
  );
};

export default Home;
