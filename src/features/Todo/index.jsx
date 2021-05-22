import React from "react";
import { useRouteMatch } from "react-router-dom";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      {/* <h2>Header chung</h2>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:idTodo`} component={DetailPage} />
      </Switch> */}
      <ListPage />
    </div>
  );
}

export default TodoFeature;
