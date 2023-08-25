import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";


const store=configureStore({
    reducer: {
        counterKey:counterReducer,
        authKey:authReducer,
    },
});

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