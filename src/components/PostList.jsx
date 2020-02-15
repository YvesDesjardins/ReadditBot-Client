import React, { useRef } from 'react';
import Post from './Post.jsx';

export default function PostList(props) {
  const reference = useRef();
  let parsePosts = [];

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

  return (
    <div>
      { parsePosts }
      <div ref={reference} />
    </div>
  );
}
