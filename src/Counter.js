import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./store";

export const Counter = () => {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
      <button onClick={() => dispatch(reset)}>reset</button>
    </div>
  );
};
