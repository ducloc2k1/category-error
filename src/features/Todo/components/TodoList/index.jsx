import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  let handleTodoClick = (todo, idx) => {
    if (onTodoClick === null) {
      return;
    }

    onTodoClick(todo, idx);
  };

  return (
    <div>
      <ul className="todolist">
        {todoList.map((todo, idx) => {
          return (
            <li
              key={todo.id}
              className={classNames({
                completed: todo.status === "completed",
                "new-item": true,
              })}
              onClick={() => {
                handleTodoClick(todo, idx);
              }}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
