import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

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
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant='subtitle2'>Chọn khoàng giá</Typography>
      <Box className={classes.range}>
        <TextField type='number' value={values.salePrice_gte} onChange={handleOnchange} name='salePrice_gte' />
        <span> - </span>
        <TextField type='number' value={values.salePrice_lte} onChange={handleOnchange} name='salePrice_lte' />
      </Box>
      <Button onClick={handleClick} variant='outlined' color='primary'>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
