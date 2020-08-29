import React from 'react';
import './PostItem.css'
import moment from 'moment';
import ClampLines from  'react-clamp-lines';
import Constants from '../helpers/constants';

export default function PostItem(props: PostItemProps) {
  console.log(props.date);

  let path = `/${props.titleKey}`;
  return (
    
    
    <article className='postItemContainer'>
      <header className='postTitle'>
        <time className='postDate' data-testid='dateRenderer'>{moment(props.date).format(Constants.DefaultDateFormat)}</time>
        <h2><a href={path}>{props.title}</a></h2>
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
  titleKey: string;
}