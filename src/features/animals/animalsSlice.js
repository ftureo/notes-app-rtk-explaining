import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Animal 1", description: "Cat" },
    { id: "2", title: "Animal 2", description: "Dog" },
    { id: "3", title: "Animal 3", description: "Bird" },
    { id: "4", title: "Animal 4", description: "Fish" },
    { id: "5", title: "Animal 5", description: "Snake" },
];

const animalsSlice = createSlice({
    // I need it: name, initialState, reducers
    name: "animals",
    initialState,
    reducers: {
        // addAnimal
        // deleteAnimal
        // updateAnimal
    },
});

export default animalsSlice.reducer;
