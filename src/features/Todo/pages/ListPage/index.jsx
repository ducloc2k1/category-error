import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
  const initialState = [
    {
      id: 1,
      title: "eat",
      status: "completed",
      price: 400,
    },
    {
      id: 2,
      title: "sleep",
      status: "new",
      price: 500,
    },
    {
      id: 3,
      title: "code",
      status: "new",
      price: 900,
    },
  ];

  const onSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };

    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);
  };

  const location = useLocation();

  const match = useRouteMatch();

  const history = useHistory();

  const [todoList, setTodoList] = useState(initialState);

  const [filterTodo, setFilterTodo] = useState(() => {
    const statusObj = queryString.parse(location.search);
    return statusObj["status"] || "all";
  });

  useEffect(() => {
    const statusObj = queryString.parse(location.search);
    setFilterTodo(statusObj.status || "all");
  }, [location.search]);

  let handleTodoClick = (currentTodo, index) => {
    let copyTodos = [...todoList];

    copyTodos[index] = {
      ...copyTodos[index],
      status: copyTodos[index].status == "new" ? "completed" : "new",
    };

    setTodoList(copyTodos);
  };

  // FILTER

  let handleShowAll = () => {
    const queryParams = {
      status: "all",
    };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  let handleShowCompleted = () => {
    const queryParams = {
      status: "completed",
    };

    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  let handleShowNew = () => {
    const queryParams = {
      status: "new",
    };

    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const rederedTodoList = todoList.filter((todo) => {
    return filterTodo === "all" || todo.status === filterTodo;
  });

  return (
    <div>
      <TodoList todoList={rederedTodoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={onSubmit} />
      <div>
        <button onClick={handleShowAll}>Show all</button>
        <button onClick={handleShowCompleted}>Show completed</button>
        <button onClick={handleShowNew}>Show new</button>
      </div>
    </div>
  );
}

export default ListPage;
