import React from 'react';
import './PostItem.css'
import moment from 'moment';

export default function PostItem(props: PostItemProps) {

  return (
    <article className='postItemContainer'>
      <header>
        <time className='postDate'>{moment(props.date).format("MMMM d, YYYY")}</time>
        <h2>{props.title}</h2>
      </header>
      <div className='postBody'>
        <p className='postBody'>{props.body}</p>
      </div>
    </article>
  )
}

interface PostItemProps {
  date: Date;
  title: string;
  body: string;
}