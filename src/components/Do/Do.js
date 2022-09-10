import React, { useEffect, useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Do.css";
import close from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";

const Do = ({ style, darkTheme, todo, setTodos }) => {
  // eslint-disable-next-line no-unused-vars
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
    await updateDoc(statusRef, {
      status: newStatus,
    });
  };

  const deleteTodo = async () => {
    await deleteDoc(doc(db, "todo-items", todo.id));
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todo.id);
    });
  };

  const toggleCompleted = () => {
    setIsCompleted((prevCompleted) => {
      let nowCompleted = "active";
      if (prevCompleted === "active") {
        nowCompleted = "completed";
      }
      updateTodo(nowCompleted);
      setTodos((prevTodos) => {
        return prevTodos.map((prevTodo) => {
          if (prevTodo.id === todo.id) {
            prevTodo.status = nowCompleted;
          }
          return prevTodo;
        });
      });
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
      <img
        className="do__close"
        src={close}
        alt="close icon"
        onClick={() => deleteTodo()}
      />
    </div>
  );
};

export default Do;
