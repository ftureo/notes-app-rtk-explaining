import { useState } from "react";
import { addTask } from "../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    // console.log("task", task);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addTask({
                ...task,
                id: uuidv4(),
            })
        );
    };

    // const handleInputChange = (e) => {
    //     setTask({
    //         ...task,
    //         title: e.target.value, // Única linea diferente
    //     });
    // };

    // const handleTextAreaChange = (e) => {
    //     setTask({
    //         ...task,
    //         description: e.target.value, // Única linea diferente
    //     });
    // };

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setTask({
            ...task,
            [e.target.name]: e.target.value,
            // Detecto e.target.name
            // y lo cargo con e.target.value,
            // key: value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title Task</label>
            <input
                type="text"
                name="title"
                placeholder="Write a title for your task"
                onChange={handleChange}
                value={task.title}
            />
            <label>Description Task</label>
            <textarea
                name="description"
                placeholder="Write a description for your task"
                onChange={handleChange}
                value={task.description}
            />
            <button type="submit">Save</button>
        </form>
    );
};
export default TaskForm;
