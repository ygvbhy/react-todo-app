import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  todoData = [
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
  ];

  handleClick = (id) => {
    const newTodoData = this.todoData.filter((n) => n.id !== id);
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.todoData.map((item) => (
            <div style={this.getStyle()} key={item.id}>
              <input type="checkbox" defaultChecked={item.completed} />
              {item.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
