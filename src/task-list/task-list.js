import React, { Component } from "react";
import Task from "../task/task";

export default class TaskList extends Component {
  handleChange(id, e) {
    this.props.editItem(id, e.target.value);
  }

  handleKeyDown(id, e) {
    if (e.key === "Enter") {
      this.props.edited(id);
    }
  }

  render() {
    const { todoData, onDeleted, onToggleDone, edited } = this.props;
    const elements = todoData.map((item) => {
      const { id, ...itemProps } = item;
      const inputEdit = (
        <input
          type="text"
          className="edit"
          value={item.label}
          onKeyDown={(event) => this.handleKeyDown(id, event)}
          onChange={(event) => this.handleChange(id, event)}
        />
      );

      let classNames = "";
      if (item.editing) {
        classNames = "editing";
      } else {
        classNames = null;
      }

      return (
        <li key={id} className={classNames}>
          <Task
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
            edited={() => edited(id)}
          />
          {item.editing ? inputEdit : null}
        </li>
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
