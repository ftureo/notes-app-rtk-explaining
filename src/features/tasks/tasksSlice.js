import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Todo 1", description: "Description 1" },
    { id: "2", title: "Todo 2", description: "Description 2" },
    { id: "3", title: "Todo 3", description: "Description 3" },
    { id: "4", title: "Todo 4", description: "Description 4" },
];

const tasksSlice = createSlice({
    // I need it: name, initialState, reducers
    name: "tasks",
    initialState,
    reducers: {
        // addTask
        // deleteTask
        // updateTask
    },
});

export default tasksSlice.reducer;
