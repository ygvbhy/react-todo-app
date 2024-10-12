import React, { useState } from "react";
import "./App.css";

export default function App() {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ]);

  const [value, setValue] = useState("");

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    const newTodoData = todoData.filter((n) => n.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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

  const handleCompletedChange = (id) => {
    const newTodoData = todoData.map((item) => {
      item.id === id && (item.completed = !item.completed);
      return item;
    });

    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((item) => (
          <div style={getStyle(item.completed)} key={item.id}>
            <input
              type="checkbox"
              defaultChecked={item.completed}
              onClick={() => handleCompletedChange(item.id)}
            />
            {item.title}
            <button style={btnStyle} onClick={() => handleClick(item.id)}>
              X
            </button>
          </div>
        ))}

        <form
          style={{ display: "flex", marginTop: "15px" }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
