import { useSelector } from "react-redux";

const Task = () => {
    const state = useSelector((state) => state);
    const tasks = useSelector((state) => state.tasks);
    console.log("state in Task", state);
    console.log("tasks in Task", tasks);
    return (
        <div>
            <h3>Task</h3>
        </div>
    );
};
export default Task;
