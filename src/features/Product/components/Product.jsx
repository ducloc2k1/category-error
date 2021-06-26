import { Box, makeStyles, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

const useStyles = makeStyles({
  thumbnail: {
    display: 'block',
  },
});

function Product({ product }) {
  const classes = useStyles();

  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  return (
    <Box padding={1} minHeight='215px'>
      <Box padding={1}>
        <img className={classes.thumbnail} src={thumbnailUrl} alt={product.name} width='100%' />
      </Box>
      <Typography>{product.name}</Typography>
      <Typography variant='body2'>
        <Box component='span' fontSize='16px' mr={1} fontWeight='bold'>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent ? ` -${product.promotionPercent} %` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
