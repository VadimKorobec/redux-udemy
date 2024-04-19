import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "./store";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};
