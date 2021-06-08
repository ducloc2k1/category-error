import { Route, Switch } from 'react-router';
import Header from './components/Header';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import DetailPage from './features/Todo/pages/DetailPage';
import AlbumFeature from './features/Album';
import { useEffect } from 'react';
import productApi from './api/productApi';
import userApi from './api/userApi';
import ProductFeature from './features/Product';

function App() {
  // useEffect(() => {
  //   const fecthProduct = async () => {
  //     const params = { _limit: 5 };
  //     const listProduct = await productApi.getAll(params);
  //     console.log(listProduct);
  //   };
  //   fecthProduct();
  // }, []);

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
      <CounterFeature />
    </div>
  );
}

export default App;
