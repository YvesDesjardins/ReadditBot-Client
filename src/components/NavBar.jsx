import React from 'react';

export default function NavBar(props) {
  return (
    <header>
      <div className='navbar'>
        <div className='navbar-brand'>ReadditBot</div>
        <div className='navbar-usercount'>{props.userCount} users connected</div>
      </div>
    </header>
  );
}
