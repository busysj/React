import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
// $router.push()

const Layout = () => {
  // useNavigate를 사용하여 원하는 주소로 이동할 수 있다
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goBoard = () => {
    // 이동할 때 현재 페이지의 기록을 남기지 않음
    // about의 기록은 남으나 현재 페이지의 기록은 남지 않음
    navigate("/boardlist", { replace: true });
  };
  const goMyPage = () => {
    navigate("/mypage");
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goBoard}>게시판으로가기</button>
        <button onClick={goMyPage}>마이페이지로가기</button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
