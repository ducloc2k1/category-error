import { Box, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import categoryApi from '../../../api/categoryApi';
import React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

FilterView.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterView({ filters = {}, onChange = null }) {
  // useEffect(async () => {
  //   if (!filters['category.id']) return;

  //   const categoryFilter = await categoryApi.get();
  // }, [filters]);
  const FILTER_LIST = [
    {
      id: 1,
      getLabel: (filters) => 'Vận chuyển miễn phí',
      isActive: (filters) => filters.isFreeShip,
      isVisible: (filters) => true,
      isRemovable: false,
      onRemove: () => 1,
      onToggle: (filters) => {
        const newFilters = { ...filters };
        if (newFilters.isFreeShip) delete newFilters.isFreeShip;
        else newFilters.isFreeShip = true;
        return newFilters;
      },
    },

    {
      id: 2,
      getLabel: (filters) => 'Có khuyến mãi',
      isActive: (filters) => filters.isPromotion,
      isVisible: (filters) => filters.isPromotion,
      isRemovable: true,
      onRemove: (filters) => {
        const newFilters = { ...filters };
        if (newFilters.isPromotion) delete newFilters.isPromotion;
        else newFilters.isPromotion = false;
        return newFilters;
      },
      onToggle: () => {},
    },

    {
      id: 3,
      getLabel: (filters) => `${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
      isActive: (filters) => filters.salePrice_gte >= 0 && filters.salePrice_lte >= 0,
      isVisible: (filters) => filters.salePrice_gte >= 0 && filters.salePrice_lte >= 0,
      isRemovable: true,
      onRemove: (filters) => {
        const newFilters = { ...filters };
        if (filters.salePrice_gte >= 0 && filters.salePrice_lte >= 0) {
          delete newFilters.salePrice_gte;
          delete newFilters.salePrice_lte;
        }
        return newFilters;
      },
      onToggle: () => {},
    },

    {
      id: 4,
      getLabel: async (filters) => {
        const categoryFilter = await categoryApi.get();
        console.log(categoryFilter);
      },
      isActive: (filters) => true,
      isVisible: (filters) => filters['category.id'],
      isRemovable: true,
      onToggle: () => {},
      onRemove: () => {},
    },
  ];

  const visibleFilter = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters, FILTER_LIST]);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      paddingLeft: '0',
      '& > li': {
        listStyleType: 'none',
        padding: theme.spacing(0, 1.5),
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box component='ul' className={classes.root}>
      {visibleFilter.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    onChange(x.onToggle(filters));
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterView;
