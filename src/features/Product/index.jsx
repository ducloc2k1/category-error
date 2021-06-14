import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path='/products' exact component={ListPage}></Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
