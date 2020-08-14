import React from 'react';
import Post from './components/Post';
import PostService from './services/postService';

import './App.css';
import { PostModel } from './models/PostModel';

function App() {
  // why doesnt importing above auto-instanciate like this?
  let service: PostService = new PostService();
  let posts: PostModel[] = service.getPosts();
  
  console.log(posts);
  return (
    <Post title={posts[0].title} body={posts[0].body}/>
  );
}

export default App;
