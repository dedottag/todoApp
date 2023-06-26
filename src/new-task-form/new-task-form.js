import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    return (
      <form className="header" onSubmit={this.onSubmit}>
        <h1>Todos</h1>
        <label>
          <input
            onChange={(e) => {
              this.onLabelChange(e);
            }}
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.label}
          ></input>
          <button
            className="button"
            onChange={(e) => {
              this.onLabelChange(e);
            }}
          >
            add
          </button>
        </label>
      </form>
    );
  }
}
