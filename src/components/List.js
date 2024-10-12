import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const handleCompletedChange = (id) => {
    const newTodoData = todoData.map((item) => {
      item.id === id && (item.completed = !item.completed);
      return item;
    });

    setTodoData(newTodoData);
  };

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

  return (
    <>
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
    </>
  );
}
