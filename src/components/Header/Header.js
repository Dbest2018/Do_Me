import React from "react";
import "./Header.css";
import moon from "../../images/icon-moon.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__nav-logo">TODO</div>
        <div className="header__nav-toggle">
          <img src={moon} alt="moon" />
        </div>
      </div>

      <div className="header__search">
        <input className="header__search-radio" type="radio" />
        <input
          className="header__search-text"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </div>
  );
};

export default Header;
