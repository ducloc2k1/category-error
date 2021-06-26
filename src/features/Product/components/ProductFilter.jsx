import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './filters/FilterByCategory';
import FilterByPrice from './filters/FilterByPrice';
import FilterByService from './filters/FilterByService';

ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (newPrice) => {
    if (onChange) onChange(newPrice);
  };

  const handleServiceChange = (service) => {
    if (onChange) onChange(service);
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
      <FilterByService onChange={handleServiceChange} filters={filters} />
    </Box>
  );
}

export default ProductFilter;
