import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  currentSort: PropTypes.number,
  onChange: PropTypes.func,
};

function ProductSort(props) {
  const { currentSort, onChange } = props;

  const handleChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs value={currentSort} onChange={handleChange} indicatorColor='primary' textColor='primary'>
      <Tab label='Giá tăng dần' value='salePrice:ASC' />
      <Tab label='Giá giảm dần' value='salePrice:DESC' />
    </Tabs>
  );
}

export default ProductSort;
