import { useState } from "react";
import "./App.css";
import DoList from "./components/DoList/DoList";
import Header from "./components/Header/Header";

function App() {
  const [darkTheme, setdarkTheme] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "This is the first todo",
      isComplete: false,
    },
    {
      id: 1,
      text: "This is the second todo",
      isComplete: false,
    },
    {
      id: 2,
      text: "This is the third todo",
      isComplete: false,
    },
    {
      id: 3,
      text: "This is the fourth todo",
      isComplete: false,
    },
    {
      id: 4,
      text: "This is the fifth todo",
      isComplete: false,
    },
    {
      id: 5,
      text: "This is the sixth todo",
      isComplete: false,
    },
  ]);

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
          todos={todos}
          setTodos={setTodos}
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
      <div className="app__footer">Drag and drop to reorder list</div>
    </div>
  );
}

export default App;
