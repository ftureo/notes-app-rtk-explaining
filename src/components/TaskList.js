import { useSelector } from "react-redux";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
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
                    </div>
                );
            })}
        </div>
    );
};
export default TaskList;
