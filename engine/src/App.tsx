import React from 'react';
import PostService from './services/postService';
import { PostModel } from './models/PostModel';
import Sidebar from './components/Sidebar';
import PostItem from './components/PostItem';

import logo from './assets/pt-logo.jpg'
import './App.css';
import { Router } from '@reach/router';
import NewPost from './components/NewPost';

function App() {
  
  let service: PostService = new PostService();
  let posts: PostModel[] = service.getPosts();
  const Home: any = () => 
    <div className='columnTwo'>
    {
      posts.map(f => {
        return <PostItem date={f.date} title={f.title} body={f.body} key={f.id} />
      })
    }
    
  </div>

  const NewPostRoute: any = () => <NewPost />
  
  return (
    <div className='mainContainer'>
      <div className='columnOne'>
        <Sidebar title='Pending Technical' subText='A Programmers Life' avatarUri={logo} twitterBioUri='https://twitter.com/arggrande' />
      </div>

      <Router>
          <Home path='/'/>
          <NewPostRoute path='/about'/>
      </Router>

    </div>
  );
}

export default App;
