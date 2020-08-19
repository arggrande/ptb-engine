import React from 'react';
import PostService from './services/postService';
import { PostModel } from './models/PostModel';
import Sidebar from './components/Sidebar';
import PostItem from './components/PostItem';

import logo from './assets/pt-logo.jpg'
import './App.css';

function App() {
  // why doesnt importing above auto-instanciate like this?
  let service: PostService = new PostService();
  let posts: PostModel[] = service.getPosts();
  
  return (
    <div className='mainContainer'>
      <div className='columnOne'>
        <Sidebar title='Pending Technical' subText='A Programmers Life' avatarUri={logo} twitterBioUri='https://twitter.com/arggrande' />
      </div>

      <div className='columnTwo'>
        {
          posts.map(f => {
            return <PostItem date='2020-01-01' title={f.title} postText={f.body} />
          })
        }
        
      </div>
    </div>
  );
}

export default App;
