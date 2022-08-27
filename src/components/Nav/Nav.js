import React from "react";
import "./Nav.css";

const Nav = ({ darkTheme, style }) => {
  const navStyle = {
    ...style,
    color: `${darkTheme ? "var(--l-gray)" : "var(--dark-grayblue)"}`,
  };
  return (
    <div className="nav" style={navStyle}>
      <div className="nav__all">All</div>
      <div className="nav__active">Active</div>
      <div className="nav__completed">Completed</div>
    </div>
  );
};

export default Nav;
