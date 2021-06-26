import { Box, makeStyles, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';

FilterByPrice.propTypes = {};

function FilterByPrice({ onChange, filters }) {
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
    if (!onChange) return;
    const { checked, name } = e.target;
    onChange({
      [name]: checked,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant='subtitle2'> Dịch Vụ</Typography>
      <Box>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
        ].map((service) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  // !! để fix A component is changing an uncontrolled input of type text to be controlled error in ReactJS
                  checked={!!filters[service.value]}
                  onChange={handleOnchange}
                  name={service['value']}
                  color='primary'
                />
              }
              label={service['label']}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default FilterByPrice;
