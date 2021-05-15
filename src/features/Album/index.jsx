import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

// AlbumFeature.propTypes = {
  
// };

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1, 
      name: "Xin Một Lần Được Yêu",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/e/3/b/6/e3b61a7d2f891da8fb1e7399cdde3052.jpg"
    },

    {
      id: 2, 
      name: "Hẹn Ước Dư Thừa",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/1/1/8/a/118a46d0bc9b7f18d1aa9e4c7dfe3df0.jpg"
    },

    {
      id: 3, 
      name: "Cho Mình Em",
      thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/a/e/6/6/ae6662bd4b2ca946371568dc335baf26.jpg"
    },
  ]
  return (
    <AlbumList albumList = {albumList}/>
  );
}

export default AlbumFeature;