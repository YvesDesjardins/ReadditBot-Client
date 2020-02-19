import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import PostList from './components/PostList.jsx';

const wsURL = process.env.NODE_ENV === 'production' ? 'wss://readdit-bot.herokuapp.com/': 'ws://localhost:3001';
const socket = new WebSocket(wsURL);

function App() {
  const [posts, setPosts] = useState({});
  socket.onmessage = (event) => {
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
