import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
// import productsReducer from "../features/products/productsSlice";
// import animalsReducer from "../features/animals/animalsSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        // products: productsReducer,
        // animals: animalsReducer,
    },
});
