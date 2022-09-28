import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log("id de la tarea", id);
        dispatch(deleteTask(id));
    };

    return (
        <div>
            <h1>Tasks: {tasks.length}</h1>
            {tasks.map((task) => {
                // <Task />
                console.log("task in map", task);
                return (
                    <div key={task.id}>
                        <h2>{task.title}</h2>
                        <h3>{task.id}</h3>
                        <p>{task.description}</p>
                        <p>{task.location?.city}</p>
                        {/* Demo de Optional Chaining */}
                        <button onClick={() => handleDelete(task.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default TaskList;
