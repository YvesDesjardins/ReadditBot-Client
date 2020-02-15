import React from 'react';

export default function Post(props) {
  // console.log('props');
  // console.log(props);
  function parsePost() {
    if (props.url.slice(-4) === '.jpg')
      return (
        <div className='post'>
          <div className='post-content'>
            <div className='post-content-title'>
              { props.title }
            </div>
            Posted by: { props.author }<br/>
          </div>
          <img src={ props.url } alt='Gif' />
          <div className='post-content-footer'>
            <a href= { `https://www.reddit.com/${props.id}` }>Link to post</a>
          </div>
        </div>);
    }

  return (
    <div>
      { parsePost() }
    </div>
  );
}
