import React, { useState, ChangeEvent } from 'react'
import MarkdownService from './../services/markdownService';

import './NewPost.css';

export default function NewPost() {

  const mdService: MarkdownService = new MarkdownService();

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState({__html: ''});
  const [postTitle, setPostTitle] = useState('');
  
  function parsePostInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputText(event.target.value);

    let result = mdService.parse(event.target.value);

    setOutputText({__html: result});

  }

  function setTitle(event: ChangeEvent<HTMLInputElement>) {
    setPostTitle(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){

    
    event.preventDefault();
  }

  return (
    <div className='newPostContainer'>
      <form onSubmit={handleSubmit} >
        <label htmlFor='title' style={{visibility: "hidden"}}>Title of post</label>
        <input type='text' className='titleInput' id='title' value={postTitle} onChange={setTitle} placeholder='Post Title'></input>

        <div className='markdownContainer'>
            <textarea placeholder='Begin writing your post...' className='postInput' value={inputText} onChange={parsePostInput} id='post' rows={25}></textarea>
            <div id='htmlOutput' dangerouslySetInnerHTML={outputText} className='htmlOutput'></div>
        </div>

        <input type='submit' value='Save'/>
      </form>
    </div>
  )
}



interface NewPostProps {

}