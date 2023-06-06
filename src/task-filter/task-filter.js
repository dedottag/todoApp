import React from "react";

const TaskFilter = ({ setFilter }) => {
  const buttons = () => {
    return (
      <ul className="filters">
        <li>
          <button
            className="btnTest"
            type="button"
            onClick={() => setFilter("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="btnTest"
            type="button"
            onClick={() => setFilter("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className="btnTest"
            type="button"
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  };

  return <div>{buttons()}</div>;
};

export default TaskFilter;
