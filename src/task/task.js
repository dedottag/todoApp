import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import "./task.css";

export default class Task extends Component {
  state = {
    time: new Date(),
  };

  // onLabelClick = () => {
  //   //передаем в seState функцию в которую передаем state для того чтобы изменить значение на противоположное, потому что setState иногда может работать асинхронно и значения в state могут быть не самыми свежими ЭТО ВАЖНО КОГДА ОБНОВЛЕИЕ СОСТОЯНИЯ ЗАВИСИТ ОТ ПРЕДЫДУЩЕГО СОСТОЯНИЯ СТЭЙТА
  //   this.setState((state) => {
  //     return {
  //       done: !state.done,
  //     };
  //   });
  // };

  createTaskTime = () => {
    const time = formatDistanceToNow(new Date(this.state.time), {
      includeSeconds: true,
    });
    return time;
  };

  render() {
    const { label, onDeleted, done, onToggleDone, edited } = this.props;

    let classNames = "description";
    let check = "";
    if (done === true) {
      classNames += " completed";
      check += "checked";
    }

    const style = {
      color: done ? "#cdcdcd" : "black",
    };

    return (
      <div className="view">
        <div onClick={onToggleDone}>
          <input
            className="toggle"
            type="checkbox"
            checked={check}
            onChange={() => {}}
          ></input>
          <label flex="true">
            <span className={classNames} style={style}>
              {label}
            </span>
            <span className="created" onClick={this.createTime}>
              created {this.createTaskTime()} ago
            </span>
          </label>
        </div>
        <button type="button" className="icon icon-edit" onClick={edited} />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
        />
      </div>
    );
  }
}
