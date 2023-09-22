import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ToDoList from "./componets/ToDoList";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToDoList />
      </BrowserRouter>
    </>
  );
}

export default App;
