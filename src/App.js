import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import PostList from './components/PostList.jsx';

const socket = new WebSocket('ws://localhost:3001');

function App() {
  const [posts, setPosts] = useState({});
  socket.onmessage = (event) => {
    // setPosts(posts.concat(event.data));
    setPosts(JSON.parse(event.data));
  }

  return (
    <div className="App">
      <NavBar/>
      <PostList posts={ posts }/>
    </div>
  );
}

export default App;
