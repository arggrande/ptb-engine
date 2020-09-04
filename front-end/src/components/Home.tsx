import React, { useState, useEffect } from 'react'
import { PostModel } from '../models/PostModel'
import PostItem from './PostItem'
import { RouteComponentProps } from '@reach/router'
import {getAllPosts} from '../services'

export default function Home(props: HomeProps) {
  const [posts, setPosts] = useState<PostModel[]>();

  useEffect(() => {
    const fetchData = async() => {
      const data = await getAllPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  if(posts === undefined) {
    return null;
  }
  return (
    <div className='columnTwo'>
    {
      posts.map(f => {
        return <PostItem date={f.date} title={f.title} body={f.body} titleKey={f.titleKey} key={f.titleKey} />
      })
    }
    
  </div>
  )
}

interface HomeProps extends RouteComponentProps {
}

