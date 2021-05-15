import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TodoList from "./components/TodoList";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Header chung</h2>
      <a href="https://vi-vn.facebook.com/">click vao day</a>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:idTodo`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
