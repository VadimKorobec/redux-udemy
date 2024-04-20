import { nanoid } from "nanoid";
import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TODO": {
      return [
        ...state,
        { id: nanoid(), title: action.title, completed: false },
      ];
    }

    case "DELETE_TODO": {
      return state.filter((item) => item.id !== action.todoId);
    }

    case "TOGGLE_TODO": {
      return state.map((item) =>
        item.id === action.todoId
          ? { ...item, completed: !item.completed }
          : item
      );
    }

    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

export const increment = { type: "INCREMENT" };
export const decrement = { type: "DECREMENT" };
export const reset = { type: "RESET" };

export const addTodo = (title) => ({
  type: "CREATE_TODO",
  title,
});

export const deleteTodo = (todoId) => ({
  type: "DELETE_TODO",
  todoId,
});

export const toggleTodo = (todoId) => ({
  type: "TOGGLE_TODO",
  todoId,
});
