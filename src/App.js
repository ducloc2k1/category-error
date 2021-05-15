import TodoForm from "./features/Todo/components/TodoForm";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/todos-list/:idTodo" component={DetailPage} />
        <Route path="/album" component={AlbumFeature} />
      </Switch> */}
      <TodoForm />
    </div>
  );
}

export default App;
