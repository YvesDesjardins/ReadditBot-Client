import React from 'react';
import '../css/NavBar.css';

export default function NavBar() {
  return (
    <header>
      <div className='navbar'>
        <div className='navbar-brand'>ReadditBot</div>
        <div className='navbar-sub'>r/aww edition</div>
      </div>
    </header>
  );
}
