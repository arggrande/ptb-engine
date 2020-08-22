import React from 'react';
import PostService from './services/postService';
import { PostModel } from './models/PostModel';
import Sidebar from './components/Sidebar';
import logo from './assets/pt-logo.jpg'
import { Router } from '@reach/router';
import NewPost from './components/NewPost';
import AboutMe from './components/About';
import Home from './components/Home';

import './App.css';

function App() {
  
  let service: PostService = new PostService();
  let posts: PostModel[] = service.getPosts();
  const HomeRoute: any = () => <Home posts={posts} />

  const NewRoute: any = () => <NewPost />
  const AboutRoute: any = () => <AboutMe />

  return (
    <div className='mainContainer'>
      <div className='columnOne'>
        <Sidebar title='Pending Technical' subText='A Programmers Life' avatarUri={logo} twitterBioUri='https://twitter.com/arggrande' />
      </div>

      <Router>
          <HomeRoute path='/'/>
          <NewRoute path='/new'/>
          <AboutRoute path='/about'/>
      </Router>

    </div>
  );
}

export default App;
