import React from "react";
import "./DoList.css";
import Do from "../Do/Do";

const DoList = () => {
  return (
    <div className="doList">
      {[0, 1, 2, 3, 4, 5, 6].map((num) => (
        <Do key={num} />
      ))}
    </div>
  );
};

export default DoList;
