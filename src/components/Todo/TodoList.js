import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <ol>
      {tasks.map(task => {
        return (
          <li key={task.id}>
            {task.title} - {task.completed ? "Done" : "Pending"}
          </li>
        );
      })}
    </ol>
  );
};

export default TodoList;
