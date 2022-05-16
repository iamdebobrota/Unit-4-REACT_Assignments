import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoError, getTodoReq, getTodoSuccess } from "../Redux/Todo/action"
import { Outlet, useParams } from "react-router-dom";
import Todo from "./Todo"
import TodoInput from "./TodoInput"
import { Alert, CircularProgress, Stack } from "@mui/material";

const TodoItem = () => {
  const { isLoading, isError, todos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTodoReq());
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((data) => dispatch(getTodoSuccess(data)))
      .catch(() => dispatch(getTodoError()));
  }, [dispatch, id]);
  
  return isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : isError ? (
    <Stack sx={{ width: "500px", margin: "20px auto" }} spacing={2}>
      <Alert variant="outlined" severity="error">
        Error.... Something went wrong. Unable to connect to server
      </Alert>
    </Stack>
  ) : (
    <div className="main_container">
      <h1>Todos</h1>
      <TodoInput />
      <br />
      {id ? <Outlet /> : todos.map((item) => <Todo key={item.id} {...item} />)}
    </div>
  );
}

export default TodoItem