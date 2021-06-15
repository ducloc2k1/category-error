import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from 'api/categoryApi';

FilterByCategory.propTypes = {};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  const handleOnClick = (filter) => {
    onChange(filter);
  };
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
    <div>
      <ul>
        {categoryList.map((category) => (
          <li
            onClick={() => {
              handleOnClick(category.id);
            }}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterByCategory;
