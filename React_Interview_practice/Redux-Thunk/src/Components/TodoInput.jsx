import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  getTodoError,
  getTodoSuccess,
  getTodoRequest,
} from "../Redux/Todo/action";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false,
    };

    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      dispatch(getTodoRequest());
      fetch("http://localhost:8080/todos")
        .then((res) => res.json())
        .then((data) => dispatch(getTodoSuccess(data)))
        .catch(() => dispatch(getTodoError()));
    });
    setTitle("");
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Your Todo Manager
          </h1>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            ></label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter todo"
              name="full-name"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-"
          onClick={() => {
            if(title.trim()) {
              handleAdd();
            }
          }}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoInput;
