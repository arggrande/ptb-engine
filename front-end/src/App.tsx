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
import MarkdownService from './services/markdownService';
import { PostModel } from './models/PostModel';
import Showdown from 'showdown';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';


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

  let auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN || 'nothing';
  let auth0ClientId = process.env.REACT_APP_AUTH0_CLIENTID || 'nothing';

  return (
    <Auth0Provider domain={auth0Domain} clientId={auth0ClientId} redirectUri={window.location.origin}> 
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

    </Auth0Provider>
     );
}

interface PostState {
  posts: PostModel[]
}

export default App;
