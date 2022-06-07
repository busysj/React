import React from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import "../App.css";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const activeStyle = {
    color: "green",
  };

  return (
    <div>
      <header>
        <NavLink
          to={"/"}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="deco"
        >
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="deco"
        >
          About
        </NavLink>{" "}
        |
        <NavLink
          to={"/boardlist"}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="deco"
        >
          {" "}
          Board
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <button onClick={goBack}>뒤로가기</button>
      </footer>
    </div>
  );
};

export default Layout;
