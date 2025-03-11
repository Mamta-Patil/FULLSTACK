"use client"; // Required for App Router
import { useDispatch , useSelector } from "react-redux";
import { increment ,decrement ,reset } from "@/redux/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count)

  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
