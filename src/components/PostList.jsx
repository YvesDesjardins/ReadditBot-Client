import React, { useRef } from 'react';
import Post from './Post.jsx';
import '../css/PostList.css';

export default function PostList(props) {
  const reference = useRef();
  let parsePosts = [];
  let loadingPosts = null;

  for (const post in props.posts) {
    const p = props.posts[post];

    parsePosts.unshift(
      <Post
        id = { p.id }
        title = { p.title }
        author = { p.author }
        url = { p.url }
        media = { p.media }
        created_at = { p.created_at }
      />
    )
  }

  if (parsePosts.length <= 0) {
    loadingPosts = <div className='loading posts'>Loading posts, please wait!</div>;
  }
  else {
    loadingPosts = null;
  }

  return (
    <div className='post-list'>
      { loadingPosts }
      { parsePosts }
      <div ref={reference} />
    </div>
  );
}
