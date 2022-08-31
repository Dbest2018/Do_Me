import React from "react";
import "./Nav.css";

const Nav = ({ darkTheme, style, displayTodos, setDisplayTodos, todos }) => {
  const navStyle = {
    ...style,
    color: `${darkTheme ? "var(--dark-grayblue)" : "var(--dark-grayblue)"}`,
  };

  const allTodos = () => {
    setDisplayTodos(todos);
  };
  const activeTodos = () => {
    setDisplayTodos((prevTodos) => {
      return prevTodos.filter((todo) => !todo.isComplete);
    });
  };
  const completedTodos = () => {
    setDisplayTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.isComplete);
    });
  };

  return (
    <div className="nav" style={navStyle}>
      <div className="nav__all" onClick={() => allTodos()}>
        All
      </div>
      <div className="nav__active" onClick={() => activeTodos()}>
        Active
      </div>
      <div className="nav__completed" onClick={() => completedTodos()}>
        Completed
      </div>
    </div>
  );
};

export default Nav;
