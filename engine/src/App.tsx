import React from 'react';
import Post from './components/Post';
import PostService from './services/postService';
import { PostModel } from './models/PostModel';
import Sidebar from './components/Sidebar';

import logo from './assets/pt-logo.jpg'
import './App.css';

function App() {
  // why doesnt importing above auto-instanciate like this?
  let service: PostService = new PostService();
  let posts: PostModel[] = service.getPosts();
  
  return (
    <div className='container'>
      <div className='columnOne'>
        <Sidebar title='Pending Technical' subText='A Programmers Life' avatarUri={logo} twitterBioUri='https://pendingtechnical.com' />
      </div>

      <div className='columnTwo'>
        <Post title={posts[0].title} body={posts[0].body}/>
      </div>
    </div>
  );
}

export default App;
