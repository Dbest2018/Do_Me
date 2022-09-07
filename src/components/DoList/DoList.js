import React, { useRef } from "react";
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
            key={index}
          >
            <Do todo={todo} darkTheme={darkTheme} style={style} />
          </div>
        ))}
        <div className="doList__footer">
          <div className="list-length">{todos.length} items left</div>
          <div className="list__nav">
            <div className="nav-item">All</div>
            <div className="nav-item">Active</div>
            <div className="nav-item">Completed</div>
          </div>
          <div className="list__clear">Clear Completed</div>
        </div>
      </div>
      <div className="mobile__nav" style={mobNavStyle}>
        <div className="nav-item">All</div>
        <div className="nav-item">Active</div>
        <div className="nav-item">Completed</div>
      </div>
    </>
  );
};

export default DoList;
