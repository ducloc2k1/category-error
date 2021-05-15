import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss'

AlbumList.propTypes = {
  albumList : PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
  return (
    <ul className = "album__list">
      {
        albumList.map((album) => {
          return (
            <li key = {album.id} className = "album__item">
              <Album album = {album}/>
            </li>
          )
        })
      }
    </ul>
  );
}

export default AlbumList;