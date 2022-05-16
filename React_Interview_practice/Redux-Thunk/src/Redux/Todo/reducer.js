import {
  DELETE_TODO,
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  todos: [],
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        todos: [],
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        todos: [],
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    default:
      return state;
  }
};