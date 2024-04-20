import { nanoid } from "nanoid";
import {
  CREATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../constans/todos-constans";

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return [
        ...state,
        { id: nanoid(), title: action.title, completed: false },
      ];
    }

    case DELETE_TODO: {
      return state.filter((item) => item.id !== action.todoId);
    }

    case TOGGLE_TODO: {
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
