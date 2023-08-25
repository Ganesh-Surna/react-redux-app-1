import classes from './Counter.module.css';
// import { useDispatch, useSelector } from 'react-redux';
import { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component{

  handleIncrement(){
    this.props.incrementFun();
  }

  handleDecrement(){
    this.props.decrementFun();
  }

  toggleCounterHandler(){

  }

  render(){
    return (
          <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{this.props.count}</div>
            <div>
            <button onClick={this.handleIncrement.bind(this)}>Increase</button>
            <button onClick={this.handleDecrement.bind(this)}>Decrease</button>
            </div>
            <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
          </main>
    );
  }
  

}

const mapStateToProps=(state)=>{
  return {count:state.count};
};

const mapDispatchToPros=(dispatch)=>{
  return {
    incrementFun:()=>{ return dispatch({type:"increment"}); },
    decrementFun:()=>{ return dispatch({type:"decrement"}); },
  };
};

export default connect(mapStateToProps,mapDispatchToPros)(Counter);

// const Counter = () => {

//   const dispatch=useDispatch();

//   const count=useSelector((state)=>state.count);

//   const handleIncrement=()=>{
//     dispatch({type:"increment"});
//   };

//   const handleDecrement=()=>{
//     dispatch({type:"decrement"});
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{count}</div>
//       <div>
//       <button onClick={handleIncrement}>Increase</button>
//       <button onClick={handleDecrement}>Decrease</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;
