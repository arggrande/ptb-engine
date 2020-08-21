import React from 'react';
import './PostItem.css'
import moment from 'moment';
import ClampLines from  'react-clamp-lines';


export default function PostItem(props: PostItemProps) {


  return (
    
    <article className='postItemContainer'>
      <header className='postTitle'>
        <time className='postDate'>{moment(props.date).format("MMMM d, YYYY")}</time>
        <h2>{props.title}</h2>
      </header>
      <div className='postBody'>
        <ClampLines text={props.body} id={'clamp'} className='postBody' ellipsis='...' lines={3} innerElement={'p'} buttons={false} />
      </div>
    </article>
  )
}

interface PostItemProps {
  date: Date;
  title: string;
  body: string;
}