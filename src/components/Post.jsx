import React from 'react';
import '../css/Post.css';

export default function Post(props) {
  function parsePost() {
      return (
        <div className='post'>
          <div className='post-content-header'>
            <div className='post-content-title'>
              { props.title }
            </div>
            Posted by: { props.author }<br/>
          </div>
          <div className='post-content'>
            <img src={ props.url } alt='Gif' />
          </div>
          <div className='post-content-footer'>
            <a href= { `https://www.reddit.com/${props.id}` }>Link to post</a>
          </div>
        </div>);
    }

  return parsePost();
}
