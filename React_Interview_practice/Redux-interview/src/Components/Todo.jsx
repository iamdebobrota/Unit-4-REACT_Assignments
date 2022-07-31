import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Todo/action";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 600px;
  border-radius: 4px;
  padding: 14px 20px;
  border: 1px solid #bbb;
  justify-content: space-between;
`;

const Todo = ({ id, title, status }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteTodo(id, dispatch);
  };
  return (
    <FlexDiv>
      <h3
        onClick={() => navigate(`todo/${id}`)}
        style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </h3>
      <button onClick={handleDelete}>Delete</button>
    </FlexDiv>
  );
};

export default Todo;
