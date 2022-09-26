import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Todo 1",
        location: {
            lat: 0,
            lng: 0,
            city: "Buenos Aires",
        },
    },
    { id: "2", title: "Todo 2" },
    { id: "3", title: "Todo 3" },
    { id: "4", title: "Todo 4" },
];

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
        // deleteTask
        // updateTask
    },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
