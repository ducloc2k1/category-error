import { Route, Switch } from 'react-router';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo';
import DetailPage from './features/Todo/pages/DetailPage';
import './App.css';

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
