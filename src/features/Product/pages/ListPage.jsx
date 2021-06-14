import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';
import ProductSkeleton from '../components/ProductSkeleton';
import React, { useEffect, useState } from 'react';
import ProductList from 'features/Product/components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};

function ListPage(props) {
  const [renderList, setRenderList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({ total: 100, limit: 9, page: 1 });

  const [filters, setFilters] = useState({
    _limit: 9,
    _page: 1,
    _sort: 'salePrice:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const rs = await productApi.getAll(filters);
        setRenderList(rs.data);
        setPagination(rs.pagination);
      } catch (error) {}
      setLoading(false);
    })();
  }, [filters]);

  const handleOnchange = (e, page) => {
    setFilters((preFilters) => {
      return {
        ...preFilters,
        _page: page,
      };
    });
  };

  const handleSortchange = (sort) => {
    setFilters((preFilters) => {
      return {
        ...preFilters,
        _sort: sort,
      };
    });
  };

  const useStyles = makeStyles({
    left: {
      width: '375px',
    },

    right: {
      flex: '1 1 0',
    },

    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      paddingBottom: '10px',
    },
  });

  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left} item>
            <Paper elevation={0}>left column</Paper>
          </Grid>
          <Grid className={classes.right} item>
            <Paper elevation={0}>
              <Box>
                <ProductSort currentSort={filters._sort} onChange={handleSortchange} />
              </Box>
              {loading ? <ProductSkeleton /> : <ProductList data={renderList} />}
              <Box>
                <Pagination
                  className={classes.pagination}
                  onChange={handleOnchange}
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color='primary'
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
