import React from 'react';
import PropTypes from 'prop-types';
import ListPage from './pages/ListPage/index';
import { Switch } from 'react-router';
import { Route, useRouteMatch } from 'react-router';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      Product Feature
      <Switch>
        <Route path='/products' exact component={ListPage}></Route>
      </Switch>
    </div>
  );
}

export default ProductFeature;
