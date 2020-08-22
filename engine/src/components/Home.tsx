import React from 'react'
import { PostModel } from '../models/PostModel'
import PostItem from './PostItem'
export default function Home(props: HomeProps) {

  return (
    <div className='columnTwo'>
    {
      props.posts.map(f => {
        return <PostItem date={f.date} title={f.title} body={f.body} key={f.id} />
      })
    }
    
  </div>
  )
}

interface HomeProps {
  posts: PostModel[]
}