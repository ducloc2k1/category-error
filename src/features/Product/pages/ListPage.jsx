import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';
import ProductSkeleton from '../components/ProductSkeleton';
import React, { useEffect, useState } from 'react';
import ProductList from 'features/Product/components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/ProductFilter';
import FilterView from '../components/FilterView';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

ListPage.propTypes = {};

function ListPage(props) {
  const location = useLocation();

  const history = useHistory();

  const queryParams = queryString.parse(location.search);

  console.log(queryParams);

  const [renderList, setRenderList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({ total: 100, limit: 9, page: 1 });

  const [filters, setFilters] = useState({
    ...queryParams,
    _limit: Number.parseInt(queryParams._limit) || 9,
    _page: Number.parseInt(queryParams._page) || 1,
  });

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  }, [filters]);

  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const rs = await productApi.getAll(filters);
        setRenderList(rs.data);
        setPagination(rs.pagination);
        console.log(pagination);
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

  const handleFilterChange = (newFilter) => {
    setFilters((preFilters) => {
      return {
        ...preFilters,
        ...newFilter,
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

  const setNewFilters = (newFilter) => {
    setFilters(newFilter);
  };

  const useStyles = makeStyles({
    left: {
      width: '300px',
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
            <Paper elevation={0}>
              <ProductFilter onChange={handleFilterChange} filters={filters}></ProductFilter>
            </Paper>
          </Grid>
          <Grid className={classes.right} item>
            <Paper elevation={0}>
              <Box>
                <ProductSort currentSort={filters._sort} onChange={handleSortchange} />
              </Box>
              <Box>
                <FilterView filters={filters} onChange={setNewFilters} />
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
