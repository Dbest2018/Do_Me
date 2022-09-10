import React, { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Do.css";
import close from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";

const Do = ({ style, darkTheme, todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.status);

  useEffect(() => {
    setIsCompleted(todo.status);
  }, [todo]);
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
    textDecoration: todo.status === "completed" && "line-through",
    color: todo.status === "completed" ? "var(--dark-grayblue)" : "inherit",
  };

  const updateTodo = async (newStatus = "") => {
    const statusRef = doc(db, "todo-items", todo.id);
    console.log(statusRef);
    await updateDoc(statusRef, {
      status: newStatus,
    });
  };

  const toggleCompleted = () => {
    // console.log(todo);
    setIsCompleted((prevCompleted) => {
      let nowCompleted = "active";
      if (prevCompleted === "active") {
        nowCompleted = "completed";
      }
      updateTodo(nowCompleted);
      return nowCompleted;
    });
  };
  return (
    <div className="do" style={doStyle}>
      {todo.status === "completed" ? (
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
