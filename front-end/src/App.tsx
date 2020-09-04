import React, { useState } from 'react';
import { Sidebar, NewPost, About, Home, Post, NotFound } from './components';
import logo from './assets/pt-logo.jpg'
import { Router, RouteComponentProps } from '@reach/router';
import { markdownService, getAllPosts } from './services';
import { PostModel } from './models/PostModel';
import Showdown from 'showdown';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';

function App() {

  Showdown.setFlavor('github');

  let mdSvc: markdownService = new markdownService();

  
  const [data, setData] = useState<PostState>({});
  loadPosts();

  const HomeRoute: any = (props: RouteComponentProps) => <Home {...props} />
  const NewRoute: any = (props: RouteComponentProps) => <NewPost {...props} onPostComplete={onPostComplete} markdownService={mdSvc} />
  const AboutRoute: any = (props: RouteComponentProps) => <About {...props} />
  const PostRoute: any = (props: RouteComponentProps) => <Post {...props}/>
  const NotFoundRoute: any = (props: RouteComponentProps) => <NotFound {...props} />

  async function loadPosts() {
    let response = await getAllPosts();
    setData({posts: response});
  }

  async function onPostComplete() {
    let newData = await getAllPosts();
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
  posts?: PostModel[]
}

export default App;
