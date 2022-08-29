import React from "react";
import "./DoList.css";
import Do from "../Do/Do";

const DoList = ({ darkTheme, style }) => {
  const doListStyle = {
    ...style,
    boxShadow: `0px 20px 20px ${
      darkTheme ? "rgba(0, 0, 0, .2)" : "var(--l-grayblue)"
    }`,
  };
  return (
    <div className="doList" style={doListStyle}>
      {[0, 1, 2, 3, 4, 5, 6].map((num) => (
        <Do key={num} darkTheme={darkTheme} style={style} />
      ))}
    </div>
  );
};

export default DoList;
