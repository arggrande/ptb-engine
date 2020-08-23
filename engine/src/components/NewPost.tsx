import React from 'react'
import Showdown from 'showdown';

import './NewPost.css';

export default function NewPost(props: NewPostProps) {

  return (
    <div className='newPostContainer'>
      
      <label htmlFor='title' style={{visibility: "hidden"}}>Title of post</label>
      <input type='text' className='titleInput' id='title' placeholder='Post Title'></input>

      <div className='markdownContainer'>
          <textarea placeholder='Begin writing your post...' className='postInput' id='post' rows={25}></textarea>
          <div id='htmlOutput' className='htmlOutput'>hello</div>
      </div>

    </div>
  )
}

interface NewPostProps {

}