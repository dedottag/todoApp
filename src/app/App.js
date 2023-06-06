import React, { Component } from "react";

import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink coffe"),
      this.createTodoItem("Make awesome app"),
      this.createTodoItem("Have a lunch"),
    ],
    filter: "all",
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      editing: false,
      id: this.maxId++,
    };
  }

  setFilter = (filter) => {
    this.setState({ filter });
  };

  getFilteredPredicate = (item) => {
    switch (this.state.filter) {
      case "completed":
        return item.done;
      case "all":
        return true;
      case "active":
        return !item.done;
      default:
        console.log("ошибка");
    }
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    if (text === "") {
      return this.props.todoData;
    }
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  clearItem = () => {
    this.setState(({ todoData }) => {
      const result = todoData.filter((el) => !el.done);
      return {
        todoData: result,
      };
    });
  };

  editItem = (id, value) => {
    const index = this.state.todoData.findIndex((item) => item.id === id);
    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData.slice(0, index),
        { ...todoData[index], label: value },
        ...todoData.slice(index + 1),
      ];
      return { todoData: newArray };
    });
  };

  edited = (id) => {
    const index = this.state.todoData.findIndex((item) => item.id === id);
    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData.slice(0, index),
        { ...todoData[index], editing: !todoData[index].editing },
        ...todoData.slice(index + 1),
      ];
      return { todoData: newArray };
    });
  };

  render() {
    const { todoData } = this.state;
    const todoCount = todoData.length - todoData.filter((el) => el.done).length;

    return (
      <div className="todoapp">
        <h1>Todos</h1>
        <NewTaskForm addItem={this.addItem} todoData={todoData} />
        <TaskList
          todoData={todoData.filter(this.getFilteredPredicate)}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          editItem={this.editItem}
          edited={this.edited}
        />
        <Footer
          todoCount={todoCount}
          clearItem={this.clearItem}
          todoData={todoData}
          setFilter={this.setFilter}
        />
      </div>
    );
  }
}
