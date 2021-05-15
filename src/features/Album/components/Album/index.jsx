import React from 'react';
import './style.scss';

function Album({album}) {
  return (
    <div className = "album__thumbnail">
      <img src={album.thumbnailUrl} alt={album.name} className = "album__img"/>
      <p className="album__title">{album.name}</p>
    </div>
  );
}

export default Album;