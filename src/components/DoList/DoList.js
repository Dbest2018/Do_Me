import React, { useRef } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./DoList.css";
import Do from "../Do/Do";

const DoList = ({ darkTheme, style, todos, setTodos }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const dosCopy = [...todos];
    const dragItemContent = dosCopy[dragItem.current];
    dosCopy.splice(dragItem.current, 1);
    dosCopy.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(dosCopy);
  };

  const doListStyle = {
    ...style,
    boxShadow: `0px 20px 20px ${
      darkTheme ? "var(--darkM-shadow)" : "var(--l-grayblue)"
    }`,
  };
  const mobNavStyle = {
    ...doListStyle,
    color: "var(--dark-grayblue)",
  };

  const getAllTodos = async () => {
    const todosRef = collection(db, "todo-items");
    const q = query(todosRef, where("status", "in", ["active", "completed"]));
    const querySnapshot = await getDocs(q);
    const newTodos = [];
    querySnapshot.forEach((doc) => {
      newTodos.push(doc.data());
    });
    setTodos(newTodos);
  };

  const getActiveTodos = async () => {
    const todosRef = collection(db, "todo-items");
    const q = query(todosRef, where("status", "==", "active"));
    const querySnapshot = await getDocs(q);
    const newTodos = [];
    querySnapshot.forEach((doc) => {
      newTodos.push(doc.data());
    });
    setTodos(newTodos);
  };

  const getCompletedTodos = async () => {
    const todosRef = collection(db, "todo-items");
    const q = query(todosRef, where("status", "==", "completed"));
    const querySnapshot = await getDocs(q);
    const newTodos = [];
    querySnapshot.forEach((doc) => {
      newTodos.push(doc.data());
    });
    setTodos(newTodos);
  };

  const clearCompletedTodos = async () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.status === "active");
    });
  };

  return (
    <>
      <div className="doList" style={doListStyle}>
        {todos.map((todo, index) => (
          <div
            className="do__item"
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            draggable
            key={todo.id ? todo.id : index}
          >
            <Do
              todo={todo}
              darkTheme={darkTheme}
              style={style}
              setTodos={setTodos}
            />
          </div>
        ))}
        <div className="doList__footer">
          <div className="list-length">{todos.length} items left</div>
          <div className="list__nav">
            <div className="nav-item" onClick={() => getAllTodos()}>
              All
            </div>
            <div className="nav-item" onClick={() => getActiveTodos()}>
              Active
            </div>
            <div className="nav-item" onClick={() => getCompletedTodos()}>
              Completed
            </div>
          </div>
          <div className="list__clear" onClick={() => clearCompletedTodos()}>
            Clear Completed
          </div>
        </div>
      </div>
      <div className="mobile__nav" style={mobNavStyle}>
        <div className="nav-item" onClick={() => getAllTodos()}>
          All
        </div>
        <div className="nav-item" onClick={() => getActiveTodos()}>
          Active
        </div>
        <div className="nav-item" onClick={() => getCompletedTodos()}>
          Completed
        </div>
      </div>
    </>
  );
};

export default DoList;
