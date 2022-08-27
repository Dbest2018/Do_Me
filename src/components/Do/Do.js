import React from "react";
import "./Do.css";
import close from "../../images/icon-cross.svg";

const Do = ({ darkTheme, style }) => {
  const doStyle = {
    ...style,
    "::placeholder": {
      color: darkTheme ? "var(--l-gray)" : "black",
    },
  };
  return (
    <div className="do">
      <input className="do__radio" type="radio" />
      <input
        className="do__text"
        style={doStyle}
        type="text"
        placeholder="Create a new todo..."
      />
      <img
        className="do__close"
        style={{ filter: darkTheme ? "opacity(.4)" : "opacity(.8)" }}
        src={close}
        alt="close icon"
      />
    </div>
  );
};

export default Do;
