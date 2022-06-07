import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const BoardList = () => {
  const LinkStyle = {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
  };
  const numlist = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Board</h1>
      <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>
      {numlist.map((num, index) => (
        <NavLink to={`/boardlist/${num}`} style={LinkStyle}>
          {num}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default BoardList;
