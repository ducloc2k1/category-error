import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography, Button, makeStyles } from '@material-ui/core';

FilterByPrice.propTypes = {};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({ salePrice_gte: 0, salePrice_lte: 0 });

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },

    range: {
      '& > span': {
        width: '30px',
        textAlign: 'center',
      },
      marginTop: '10px',
      marginBottom: '30px',
      display: 'flex',
    },
  }));

  const classes = useStyles();

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
    <Box className={classes.root}>
      <Typography variant='subtitle2'>Chọn khoàng giá</Typography>
      <Box className={classes.range}>
        <TextField type='number' onChange={handleOnchange} name='salePrice_gte' />
        <span> - </span>
        <TextField type='number' onChange={handleOnchange} name='salePrice_lte' />
      </Box>
      <Button onClick={handleClick} variant='outlined' color='primary'>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
