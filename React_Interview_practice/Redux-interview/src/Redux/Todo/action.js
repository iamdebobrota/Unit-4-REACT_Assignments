import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  DELETE_TODO,
} from "./actionType";

export const getTodoRequest = () => ({
  type: GET_TODO_REQUEST,
});

export const getTodoError = () => ({
  type: GET_TODO_ERROR,
});

export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});

export const toggleStatus = (payload, id, dispatch) => {
  fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch(() => dispatch(getTodoError()));
};

export const deleteTodo = (id, dispatch) => {
  fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
  });

  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};
