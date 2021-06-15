import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography, Button } from '@material-ui/core';

FilterByPrice.propTypes = {};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({ salePrice_gte: 0, salePrice_lte: 0 });

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = () => {
    onChange(values);
  };
  return (
    <Box>
      <Typography variant='subtitle2'>Chọn khoàng giá</Typography>
      <Box>
        <TextField type='number' onChange={handleOnchange} name='salePrice_gte' />
        <span> - </span>
        <TextField type='number' onChange={handleOnchange} name='salePrice_lte' />
        <div>
          <Button onClick={handleClick} variant='contained' color='primary'>
            Submit
          </Button>
        </div>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
