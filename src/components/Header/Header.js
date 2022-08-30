import React from "react";
import "./Header.css";
import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg";

const Header = ({
  darkTheme,
  style,
  toggleTheme,
  todo,
  todos,
  setTodo,
  setTodos,
}) => {
  const headerButton = {
    border: darkTheme
      ? "1px solid var(--dark-grayblue)"
      : "1px solid var(--l-grayblue)",
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__nav-logo">TODO</div>
        <div className="header__nav-toggle" onClick={() => toggleTheme()}>
          <img src={darkTheme ? sun : moon} alt={darkTheme ? "sun" : "moon"} />
        </div>
      </div>

      <form
        className="header__search"
        style={style}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="header__search-button" style={headerButton}></div>
        <input
          className="header__search-text"
          style={style}
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Header;
