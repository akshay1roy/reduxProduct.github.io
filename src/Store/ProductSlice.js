

import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

export const STATUES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
})

const ProductSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: STATUES.IDLE,
    },

    reducers: {
        setProducts(state, action) {
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
        
       
    }
})

export const { setProducts ,setStatus } = ProductSlice.actions;

export default ProductSlice.reducer;




// thunks

export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){

        dispatch(setStatus(STATUES.LOADING));
        try {
            const res=await fetch("https://fakestoreapi.com/products");

            const data= await res.json();

            dispatch(setProducts(data));

            dispatch(setStatus(STATUES.IDLE));
            
        } catch (error) {
            console.log(error);

            dispatch(setStatus(STATUES.IDLE))
            
        }
    }
}

