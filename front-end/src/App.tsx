import React, { useState } from 'react';
import { Sidebar, NewPost, About, Home, Post, NotFound } from './components';
import logo from './assets/pt-logo.jpg'
import { Router, RouteComponentProps } from '@reach/router';
import { markdownService, postService } from './services';
import { PostModel } from './models/PostModel';
import Showdown from 'showdown';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';


function App() {

  Showdown.setFlavor('github');

  let postSvc: postService = new postService();
  let mdSvc: markdownService = new markdownService();

  let response = postSvc.getPosts();
  const [data, setData] = useState<PostState>({posts: response});

  const HomeRoute: any = (props: RouteComponentProps) => <Home {...props} posts={data.posts} />
  const NewRoute: any = (props: RouteComponentProps) => <NewPost {...props} onPostComplete={onPostComplete} postService={postSvc} markdownService={mdSvc} />
  const AboutRoute: any = (props: RouteComponentProps) => <About {...props} />
  const PostRoute: any = (props: RouteComponentProps) => <Post {...props}/>
  const NotFoundRoute: any = (props: RouteComponentProps) => <NotFound {...props} />

  function onPostComplete(): void {
    let newData = postSvc.getPosts();
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
