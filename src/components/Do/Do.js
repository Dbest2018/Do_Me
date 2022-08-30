import React, { useState } from "react";
import "./Do.css";
import close from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";

const Do = ({ style, darkTheme }) => {
  const [isCompleted, setIsCompleted] = useState(false);
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
  const textStyle = {
    ...style,
    textDecoration: isCompleted && "line-through",
    color: isCompleted ? "var(--dark-grayblue)" : "inherit",
  };

  const toggleCompleted = () => {
    setIsCompleted((prevCompleted) => !prevCompleted);
  };
  return (
    <div className="do" style={doStyle}>
      {isCompleted ? (
        <img
          className="do__check"
          onClick={() => toggleCompleted()}
          src={check}
          alt="check"
        />
      ) : (
        <div
          className="do__button"
          style={doButton}
          onClick={() => toggleCompleted()}
        ></div>
      )}
      <div className="do__text" style={textStyle}>
        You have to do me, like now please do me.
      </div>
      <img className="do__close" src={close} alt="close icon" />
    </div>
  );
};

export default Do;
