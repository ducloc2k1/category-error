import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Box, Grid } from '@material-ui/core';

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((x, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Product product={x}></Product>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProductList;
