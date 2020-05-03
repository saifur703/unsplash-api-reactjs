import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>01938448 283737</p>
            <div className='footer-menu'>
              <ul>
                <li>
                  <a href='/'>Facebook</a>
                </li>
                <li>
                  <a href='/'>Facebook</a>
                </li>
                <li>
                  <a href='/'>Facebook</a>
                </li>
                <li>
                  <a href='/'>Facebook</a>
                </li>
                <li>
                  <a href='/'>Facebook</a>
                </li>
              </ul>
            </div>
            <p className='copyright'>&copy; 2020 | All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
