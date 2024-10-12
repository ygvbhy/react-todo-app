import React from "react";

export default function List({ todoData, setTodoData }) {
  const handleCompletedChange = (id) => {
    const newTodoData = todoData.map((item) => {
      item.id === id && (item.completed = !item.completed);
      return item;
    });

    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    const newTodoData = todoData.filter((n) => n.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <>
      {todoData.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center ">
              <input
                type="checkbox"
                defaultChecked={item.completed}
                onClick={() => handleCompletedChange(item.id)}
              />
              <span className={item.completed ? "line-through" : undefined}>
                {item.title}
              </span>
            </div>
            <div className="items-center ">
              <button
                className="px-4 py-2"
                onClick={() => handleClick(item.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
