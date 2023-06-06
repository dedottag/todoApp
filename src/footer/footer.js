import React from "react";
import TaskFilter from "../task-filter";

const Footer = ({ todoCount, clearItem, todoData, setFilter }) => {
  return (
    <footer className="footer" flex="true">
      <span className="todo-count"> {todoCount} items left</span>
      <TaskFilter todoData={todoData} setFilter={setFilter} />
      <button className="clear-completed" type="button" onClick={clearItem}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
