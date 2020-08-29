import React from 'react'
import { PostModel } from '../models/PostModel'
import PostItem from './PostItem'
import { RouteComponentProps } from '@reach/router'

export default function Home(props: HomeProps) {
  
  return (
    <div className='columnTwo'>
    {
      props.posts.map(f => {
        return <PostItem date={f.date} title={f.title} body={f.body} titleKey={f.titleKey} key={f.titleKey} />
      })
    }
    
  </div>
  )
}

interface HomeProps extends RouteComponentProps {
  posts: PostModel[],
}

