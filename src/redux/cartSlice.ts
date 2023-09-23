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
            const existingProduct = state.productData.find(
                (item: any) => item._id === action.payload._id
            );

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: any) => item._id === action.payload._id
            );

            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: any) => item._id === action.payload._id
            );

            if (existingProduct?.quantity === 1) {
                existingProduct.quantity === 1;
            } else {
                existingProduct && existingProduct.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        }
    }
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart
} = cartSlice.actions;

export default cartSlice.reducer;