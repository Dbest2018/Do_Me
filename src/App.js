import "./App.css";
import DoList from "./components/DoList/DoList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__main">
        <DoList />
      </div>
      <div className="app__nav">
        <Nav />
      </div>
      <div className="app__footer">Drag and drop to reorder list</div>
    </div>
  );
}

export default App;
