import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import categoryApi from 'api/categoryApi';
import React, { useEffect, useState } from 'react';

FilterByCategory.propTypes = {};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  const handleOnClick = (filter) => {
    onChange(filter);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },

    menu: {
      listStyle: 'none',
      '& > li': {
        marginTop: theme.spacing(1),
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    (async function () {
      try {
        const categories = await categoryApi.getAll();
        setCategoryList(
          categories.map((category) => {
            return {
              id: category.id,
              name: category.name,
            };
          })
        );
        console.log(categories);
      } catch (error) {
        console.log('Failed to fetch', error);
      }
      // console.log(categories);
    })();
  }, []);
  return (
    <Box className={classes.root}>
      <Typography variant='subtitle2'>Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li
            onClick={() => {
              handleOnClick(category.id);
            }}
            key={category.id}
          >
            <Typography variant='body2'>{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
