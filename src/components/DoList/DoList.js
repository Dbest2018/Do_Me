import React, { useState, useRef } from "react";
import "./DoList.css";
import Do from "../Do/Do";

const DoList = ({ darkTheme, style, isCompleted, toggleCompleted }) => {
  const [dos, setDos] = useState([0, 1, 2, 3, 4, 5, 6]);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const dosCopy = [...dos];
    const dragItemContent = dosCopy[dragItem.current];
    dosCopy.splice(dragItem.current, 1);
    dosCopy.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setDos(dosCopy);
  };

  const doListStyle = {
    ...style,
    boxShadow: `0px 20px 20px ${
      darkTheme ? "rgba(0, 0, 0, .2)" : "var(--l-grayblue)"
    }`,
  };
  return (
    <div className="doList" style={doListStyle}>
      {dos.map((num, index) => (
        <div
          className="do__item"
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          draggable
          key={num}
        >
          <Do
            id={num}
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
