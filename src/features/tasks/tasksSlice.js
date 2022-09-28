import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
    // I need it: name, initialState, reducers
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log("state en addTask", state);
            console.log("action en Addtask", action);
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            console.log("state en deleteTask", state);
            console.log("action en deleteTask", action);
            console.log("action.payload en deleteTask", action.payload);
            return state.filter((task) => task.id !== action.payload);

            // Haciendo un splice - -Buscamos la tarea con un Find y luego hacemos un splice
        },
        // updateTask
    },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
