import React, { useState } from 'react';
import PostService from './services/postService';
import Sidebar from './components/Sidebar';
import logo from './assets/pt-logo.jpg'
import { Router, RouteComponentProps } from '@reach/router';
import NewPost from './components/NewPost';
import AboutMe from './components/About';
import Home from './components/Home';
import Post from './components/Post';
import NotFound from './components/NotFound';

import Showdown from 'showdown';

import './App.css';
import MarkdownService from './services/markdownService';
import { PostModel } from './models/PostModel';

function App() {

  Showdown.setFlavor('github');

  let postService: PostService = new PostService();
  let markdownSerivce: MarkdownService = new MarkdownService();

  
  let response = postService.getPosts();
  const [data, setData] = useState<PostState>({posts: response});

  const HomeRoute: any = (props: RouteComponentProps) => <Home {...props} posts={data.posts} />
  const NewRoute: any = (props: RouteComponentProps) => <NewPost {...props} onPostComplete={onPostComplete} postService={postService} markdownService={markdownSerivce} />
  const AboutRoute: any = (props: RouteComponentProps) => <AboutMe {...props} />
  const PostRoute: any = (props: RouteComponentProps) => <Post {...props}/>
  const NotFoundRoute: any = (props: RouteComponentProps) => <NotFound {...props} />

  function onPostComplete(): void {
    let newData = postService.getPosts();
    setData({posts: newData});
  }

  return (
    <div className='mainContainer'>
      <div className='columnOne'>
        <Sidebar title='Pending Technical' subText='A Programmers Life' avatarUri={logo} twitterBioUri='https://twitter.com/arggrande' />
      </div>

      <Router>
          <HomeRoute path='/'/>
          <NewRoute path='/new'/>
          <AboutRoute path='/about'/>
          <PostRoute path='/:titleKey'/>
          <NotFoundRoute path='/404'/>
      </Router>

    </div>
  );
}

interface PostState {
  posts: PostModel[]
}

export default App;
