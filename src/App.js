import "./App.css";
import Header from "./components/Header/header.jsx";
import TaskList from "./components/TaskList/taskList.jsx";
import TaskForm from "./components/TaskForm/taskForm.jsx";

function App() {
  return (
    <div className='App'>
      <Header/>
      <TaskList/>
      <div className="line"></div>
      <TaskForm/>
    </div>
  );
}

export default App;