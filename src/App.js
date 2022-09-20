import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

const App = () => {
    console.log("App");
    return (
        <div className="App">
            <h1>New App in progress</h1>
            <TaskList />
            <TaskForm />
            <Task />
        </div>
    );
};

export default App;
