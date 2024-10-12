import React, { useCallback, useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleClick = useCallback(
    (id) => {
      const newTodoData = todoData.filter((n) => n.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  const handleDelete = () => {
    setTodoData([]);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleDelete}>Delete All</button>
        </div>
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
