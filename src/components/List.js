import React from "react";

const List = React.memo(
  ({
    todoData,
    key,
    id,
    title,
    completed,
    setTodoData,
    provided,
    snapshot,
  }) => {
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
      <div
        key={key}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={() => handleCompletedChange(id)}
          />
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div className="items-center ">
          <button className="px-4 py-2" onClick={() => handleClick(id)}>
            X
          </button>
        </div>
      </div>
    );
  }
);

export default List;
