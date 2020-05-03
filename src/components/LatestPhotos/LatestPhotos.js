import React, { useState, useEffect } from 'react';
import './LatestPhotos.css';
import LatestPhoto from '../LatestPhoto/LatestPhoto';

const LatestPhotos = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=15d292dfad043e777a3ddc1cda569dddcdd76b3e08530df06590f2146e31da25&per_page=18'
    )
      .then((res) => res.json())
      .then((result) => {
        setImages(result);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  }, []);

  return (
    <div className='latest-photos-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 text-center'>
            <h2>Latest Photos</h2>
            <hr />
          </div>
        </div>
        <div className='row'>
          {images.map((img) => (
            <LatestPhoto key={img.id} images={img}></LatestPhoto>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPhotos;
