import React from 'react';

export default function Post(props) {
  // console.log('props');
  // console.log(props);
  function parsePost() {
    if (props.url.slice(-4) === '.jpg')
      return (
      <div className='post-content'>
        { props.title }<br/>
        Posted by: { props.author }<br/>
        <img src={ props.url } alt='Gif' />
      </div>);
    }

  return (
    <div className='post' >
      { parsePost() }
    </div>
  );
}
