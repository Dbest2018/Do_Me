import { useState } from "react";
import "./App.css";
import DoList from "./components/DoList/DoList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  const [darkTheme, setdarkTheme] = useState(false);
  const [todos, setTodos] = useState([
    "This is the first todo",
    "This is the second todo",
    "This is the third todo",
    "This is the fourth todo",
    "This is the fifth todo",
    "This is the sixth todo",
    "Allow me to introduce myself",
  ]);
  const [todo, setTodo] = useState("");

  const style = {
    color: darkTheme ? "var(--l-gray)" : "var(--vdark-grayblue)",
    backgroundColor: `${darkTheme ? "var(--mdark-grayblue)" : "var(--l-gray)"}`,
  };
  const appStyle = {
    ...style,
    backgroundColor: `${
      darkTheme ? "var(--vdark-grayblue)" : "var(--vl-grayblue)"
    }`,
  };

  const toggleTheme = () => {
    setdarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className="app" style={appStyle}>
      <div className="app__header">
        <Header
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
          style={style}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setTodo={setTodo}
        />
      </div>
      <div className="app__main">
        <DoList
          darkTheme={darkTheme}
          style={style}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className="app__nav">
        <Nav darkTheme={darkTheme} style={style} />
      </div>
      <div className="app__footer">Drag and drop to reorder list</div>
    </div>
  );
}

export default App;
