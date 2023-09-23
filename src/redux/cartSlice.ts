import { ProductsType } from "../../Types";
import { createSlice } from "@reduxjs/toolkit";

interface StoreState {
    productData: ProductsType[];
    userInfo: null | string;
    orderData: [];
};

const initialState: StoreState = {
    productData: [],
    userInfo: null,
    orderData: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.productData = action.payload;
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;