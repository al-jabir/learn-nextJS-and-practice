import Link from 'next/link';
import React from 'react';
import '../../styles/header.module.css';

const Header = () => {
  return (
    <nav className='main-nav'>
      <div className='container'>
        <div className='nav-wrapper'>
          <div className='logo'>
            <h3>Nav</h3>
          </div>
          <ul className='menu'>
            <li>
              <Link href='#'>Home</Link>
            </li>
            <li>
              <Link href='#'>About</Link>
            </li>
            <li>
              <Link href='#'>Portfolio</Link>
            </li>
            <li>
              <Link href='#'>Services</Link>
            </li>
            <li>
              <Link href='#'>Contacts</Link>
            </li>
          </ul>
          <div className='mobile-btn'>
            <span className='clox'>Close</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
