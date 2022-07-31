import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTodoError, toggleStatus } from "../Redux/Todo/action";
import Switch from "@mui/material/Switch";

const IndividualItem = () => {
  const [todo, setTodo] = useState({});
  const [completed, setCompleted] = useState(false);
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:8080/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setCompleted(data.status);
        setChecked(data.status);
      })
      .catch(() => dispatch(getTodoError()));
  }, [dispatch, id]);


  const handleChange = () => {
    setChecked(!checked);
    const payload = {
      ...todo,
      status: !completed,
    };
    toggleStatus(payload, id, dispatch);
  };
  
  return (
    <div className="ind_todo">
      <h1
        className="ind_title"
        style={
          completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.title}
      </h1>
      <p title={completed ? "completed" : "Mark as complete"}>
        <Switch
          checked={checked}
          onChange={() => {
            setCompleted(!completed);
            handleChange();
          }}
        />
      </p>
    </div>
  );
};

export default IndividualItem;
