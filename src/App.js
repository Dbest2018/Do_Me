import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";
import DoList from "./components/DoList/DoList";
import Header from "./components/Header/Header";

function App() {
  const [darkTheme, setdarkTheme] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let active = false;
    const fetchTodos = async () => {
      const querySnapshot = await getDocs(collection(db, "todo-items"));
      querySnapshot.forEach((doc) => {
        if (active) {
          setTodos((prevTodos) => {
            const newTodo = { id: doc.id, ...doc.data() };
            return [...prevTodos, newTodo];
          });
        }
      });
    };
    fetchTodos();
    return () => {
      active = true;
    };
  }, []);

  const style = {
    color: darkTheme ? "var(--dark-text)" : "var(--mdark-grayblue)",
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
