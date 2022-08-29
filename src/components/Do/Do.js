import React from "react";
import "./Do.css";
import close from "../../images/icon-cross.svg";

const Do = ({ style, darkTheme }) => {
  const doStyle = {
    borderBottom: darkTheme
      ? "1px solid var(--dark-grayblue)"
      : "1px solid var(--l-grayblue)",
  };
  const doButton = {
    border: darkTheme
      ? "1px solid var(--dark-grayblue)"
      : "1px solid var(--l-grayblue)",
  };
  return (
    <div className="do" style={doStyle}>
      <div className="do__button" style={doButton}></div>
      <input
        className="do__text"
        style={style}
        type="text"
        placeholder="Create a new todo..."
      />
      <img className="do__close" src={close} alt="close icon" />
    </div>
  );
};

export default Do;
