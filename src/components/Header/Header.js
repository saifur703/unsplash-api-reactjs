import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 my-auto'>
            <div className='logo'>
              <a href='/'>Unsplash Photo</a>
            </div>
          </div>
          <div className='col-md-5 my-auto text-center'>
            <div className='mainmenu'>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/'>Gallery</a>
                </li>
                <li>
                  <a href='/'>Services</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-4 my-auto text-right'>
            <div className='search-form'>
              <form action='/'>
                <input
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Search here...'
                />
                <input type='submit' value='Submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
