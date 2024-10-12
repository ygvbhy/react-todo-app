import React, { useState } from "react";

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
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCompletedChange = (id) => {
      const newTodoData = todoData.map((item) => {
        item.id === id && (item.completed = !item.completed);
        return item;
      });

      setTodoData(newTodoData);
    };

    const handleChange = (e) => {
      setEditedTitle(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });

      setTodoData(newTodoData);
      setEditedTitle("");
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div
          className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={editedTitle}
                onChange={handleChange}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
              />
            </form>
          </div>
          <div className="items-center ">
            <button className="" type="submit" onSubmit={handleSubmit}>
              save
            </button>
            <button className="px-4 py-2" onClick={() => setIsEditing(false)}>
              X
            </button>
          </div>
        </div>
      );
    } else {
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
            <button className="" onClick={() => setIsEditing(true)}>
              edit
            </button>
            <button className="px-4 py-2" onClick={() => handleClick(id)}>
              X
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
