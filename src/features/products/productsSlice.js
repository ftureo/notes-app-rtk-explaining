import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Product 1", description: "Description product 1" },
    { id: "2", title: "Product 2", description: "Description product 2" },
    { id: "3", title: "Product 3", description: "Description product 3" },
    { id: "4", title: "Product 4", description: "Description product 4" },
    { id: "5", title: "Product 5", description: "Description product 5" },
];

const productsSlice = createSlice({
    // I need it: name, initialState, reducers
    name: "products",
    initialState,
    reducers: {
        // addProduct
        // deleteProduct
        // updateProduct
    },
});

export default productsSlice.reducer;
