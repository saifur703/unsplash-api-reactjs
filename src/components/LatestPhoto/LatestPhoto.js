import React from 'react';
import './LatestPhoto.css';

const LatestPhoto = (props) => {
  const { urls, description, alt_description, links } = props.images;
  console.log(props);
  return (
    <React.Fragment>
      <div className='col-md-4'>
        <div className='single-photo-item'>
          <div className='single-photo-wrap'>
            <img src={urls.regular} alt='' />
            <a rel='noopener noreferrer' target='_blank' href={links.download}>
              Download
            </a>
          </div>
          <div className='single-photo-meta'>
            <h2>{description}</h2>
            <p>{alt_description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LatestPhoto;
