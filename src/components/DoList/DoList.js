import React, { useRef } from "react";
import "./DoList.css";
import Do from "../Do/Do";

const DoList = ({
  darkTheme,
  style,
  isCompleted,
  toggleCompleted,
  todos,
  displayTodos,
  setDisplayTodos,
  setTodos,
}) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const dosCopy = [...displayTodos];
    const dragItemContent = dosCopy[dragItem.current];
    dosCopy.splice(dragItem.current, 1);
    dosCopy.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setDisplayTodos(dosCopy);
  };

  const doListStyle = {
    ...style,
    boxShadow: `0px 20px 20px ${
      darkTheme ? "rgba(0, 0, 0, .2)" : "var(--l-grayblue)"
    }`,
  };
  return (
    <div className="doList" style={doListStyle}>
      {displayTodos.map((todo, index) => (
        <div
          className="do__item"
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          draggable
          key={index}
        >
          <Do
            todo={todo}
            darkTheme={darkTheme}
            style={style}
            isCompleted={isCompleted}
            toggleCompleted={toggleCompleted}
          />
        </div>
      ))}
    </div>
  );
};

export default DoList;
