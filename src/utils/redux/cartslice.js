import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        additems:(state,action)=>{
            //modidying the state itself
           state.items.push(action.payload);                                                                                                       
        },
        removeitems:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            // state.items.length=0;
             return {items:[]};
        },
    }
});

export const {additems,removeitems,clearCart}=cartslice.actions;
export default cartslice.reducer;