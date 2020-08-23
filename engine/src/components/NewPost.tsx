import React, { useState, ChangeEvent } from 'react'
import MarkdownService from './../services/markdownService';

import './NewPost.css';

export default function NewPost() {

  const [mdService] = useState(new MarkdownService());
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState({__html: ''});

  function parse(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputText(event.target.value);

    let result = mdService.parse(event.target.value);

    setOutputText({__html: result});

  }

  return (
    <div className='newPostContainer'>
      
      <label htmlFor='title' style={{visibility: "hidden"}}>Title of post</label>
      <input type='text' className='titleInput' id='title' placeholder='Post Title'></input>

      <div className='markdownContainer'>
          <textarea placeholder='Begin writing your post...' className='postInput' value={inputText} onChange={parse} id='post' rows={25}></textarea>
          <div id='htmlOutput' dangerouslySetInnerHTML={outputText} className='htmlOutput'></div>
      </div>

    </div>
  )
}



interface NewPostProps {

}