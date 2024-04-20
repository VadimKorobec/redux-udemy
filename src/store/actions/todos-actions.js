import {
  CREATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../constans/todos-constans";

export const addTodo = (title) => ({
  type: CREATE_TODO,
  title,
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  todoId,
});

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  todoId,
});
