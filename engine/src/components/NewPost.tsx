import React from 'react'
import './NewPost.css';

export default function NewPost(props: NewPostProps) {

  return (
    <div className='newPostContainer'>
      
      <label htmlFor='title' style={{visibility: "hidden"}}>Title of post</label>
      <input type='text' className='titleInput' id='title' placeholder='Post Title'></input>

      <label htmlFor='post' style={{visibility: "hidden"}}>Write your post</label>
      <textarea placeholder='Begin writing your post...' className='postInput' id='post' rows={25}></textarea>

    </div>
  )
}

interface NewPostProps {

}