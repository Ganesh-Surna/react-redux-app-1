import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState={count:0, isShowCounter:true};

const counterSlice=createSlice({
    name:"counter",
    initialState,
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

const store=configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions=counterSlice.actions;

export default store;









// import {createStore} from "redux";

// const counterReducer=(state={count:0},action)=>{
//     if(action.type==="increment"){
//         return {count:state.count+1};
//     }
//     if(action.type==="decrement"){
//         return {count:state.count-1};
//     }
//     return state;
// };

// const store=createStore(counterReducer);

// export default store;