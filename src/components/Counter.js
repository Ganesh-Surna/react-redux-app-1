import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {

  const dispatch=useDispatch();

  const count=useSelector((state)=>state.counterKey.count);
  const isShowCounter=useSelector((state)=>state.counterKey.isShowCounter);

  const handleIncrement=()=>{
    dispatch(counterActions.increment());  //{type:"some_unique_id"}
  };

  const handleDecrement=()=>{
    dispatch(counterActions.decrement());  //{type:"some_unique_id"}
  };

  const handleIncreaseBy=()=>{
    dispatch(counterActions.incrementBy(10)); //{type:"some_unique_id", payload:10}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleShow())    //{type:"some_unique_id"}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>{count}</div>}
      <div>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleIncreaseBy}>Increase By 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



// import { Component } from "react";
// import { connect } from "react-redux";

// class Counter extends Component{

//   handleIncrement(){
//     this.props.incrementFun();
//   }

//   handleDecrement(){
//     this.props.decrementFun();
//   }

//   toggleCounterHandler(){

//   }

//   render(){
//     return (
//           <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter1}</div>
//             <div>
//             <button onClick={this.handleIncrement.bind(this)}>Increase</button>
//             <button onClick={this.handleDecrement.bind(this)}>Decrease</button>
//             </div>
//             <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//           </main>
//     );
//   }
  

// }

// const mapStateToProps=(state)=>{
//   return {counter1:state.count};
// };

// const mapDispatchToPros=(dispatch)=>{
//   return {
//     incrementFun:()=>{ return dispatch({type:"increment"}); },
//     decrementFun:()=>{ return dispatch({type:"decrement"}); },
//   };
// };

// export default connect(mapStateToProps,mapDispatchToPros)(Counter);

