import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Do.css";
import close from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";

const Do = ({ style, darkTheme, todo }) => {
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

  const updateTodo = async (status) => {
    const statusRef = doc(db, "todo-items", todo.id);
    await updateDoc(statusRef, {
      status: status ? "completed" : "active",
    });
  };

  const toggleCompleted = () => {
    setIsCompleted((prevCompleted) => {
      const nowCompleted = !prevCompleted;
      updateTodo(nowCompleted);
      return nowCompleted;
    });
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
        {todo.text}
      </div>
      <img className="do__close" src={close} alt="close icon" />
    </div>
  );
};

export default Do;
