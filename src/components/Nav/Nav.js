import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__all">All</div>
      <div className="nav__active">Active</div>
      <div className="nav__completed">Completed</div>
    </div>
  );
};

export default Nav;
