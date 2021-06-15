import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FilterByCategory from './filters/FilterByCategory';

ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };
  return (
    <Box>
      <Typography>Danh sach loc san pham</Typography>
      <FilterByCategory onChange={handleCategoryChange} />
    </Box>
  );
}

export default ProductFilter;
