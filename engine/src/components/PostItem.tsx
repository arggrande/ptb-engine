import React from 'react';
import './PostItem.css'

export default function PostItem(props: PostItemProps) {

  return (
    <article className='postItemContainer'>
      <header>
        <time className='postDate'>{props.date}</time>
        <h2>{props.title}</h2>
      </header>
      <div className='postBody'>
        <p className='postBody'>{props.postText}</p>
      </div>
    </article>
  )
}

interface PostItemProps {
  date: string;
  title: string;
  postText: string;
}