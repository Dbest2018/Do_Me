import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Header.css";
import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg";

const Header = ({ darkTheme, style, toggleTheme, todos, setTodos }) => {
  const [todo, setTodo] = useState({ text: "", status: "active" });
  const headerButton = {
    border: darkTheme
      ? "1px solid var(--dark-grayblue)"
      : "1px solid var(--l-grayblue)",
  };

  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "todo-items"), todo);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleChange = (e) => {
    setTodo({
      text: e.target.value,
      status: "active",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, todo];
      return newTodos;
    });
    addTodo();

    setTodo({
      text: "",
      status: "active",
    });
  };

  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__nav-logo">TODO</div>
        <div className="header__nav-toggle" onClick={() => toggleTheme()}>
          <img src={darkTheme ? sun : moon} alt={darkTheme ? "sun" : "moon"} />
        </div>
      </div>

      <form
        className="header__search"
        style={style}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="header__search-button" style={headerButton}></div>
        <input
          className="header__search-text"
          style={style}
          value={todo.text}
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Header;
