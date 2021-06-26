import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo';
import DetailPage from './features/Todo/pages/DetailPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/todos' component={TodoFeature} />
        <Route path='/todos-list/:idTodo' component={DetailPage} />
        <Route path='/album' component={AlbumFeature} />
        <Route path='/products' component={ProductFeature}></Route>
      </Switch>
      {/* <TodoFeature /> */}
      {/* <CounterFeature /> */}
    </div>
  );
}

export default App;
