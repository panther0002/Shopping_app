import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add : (state,action)=>{
            state.push(action.payload);  // input parameter access by action.payload
        },
        remove : (state,action)=>{
            return state.filter( (item) => item.id !== action.payload);
            // state e ogulo item kei rakhbo jader id not equall to the action.payload
        },

    }
});

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;

