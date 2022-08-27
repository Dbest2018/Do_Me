import React from "react";
import "./Do.css";
import close from "../../images/icon-cross.svg";

const Do = ({ darkTheme, style }) => {
  return (
    <div className="do">
      <input className="do__radio" type="radio" />
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
