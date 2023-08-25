import { createSlice } from "@reduxjs/toolkit";

const initialCounterState={count:0, isShowCounter:true};

const counterSlice=createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.count++;
        },
        incrementBy(state,action){
            state.count+=action.payload;
        },
        decrement(state){
            state.count--;
        },
        toggleShow(state){
            state.isShowCounter=!state.isShowCounter;
        },
    },
});

export const counterActions=counterSlice.actions;

export default counterSlice.reducer;