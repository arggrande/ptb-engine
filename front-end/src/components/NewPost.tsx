import React, { useState, ChangeEvent } from 'react'
import MarkdownService from './../services/markdownService';
import moment from 'moment';
import PostService from '../services/postService';
import { PostModel } from '../models/PostModel';
import { navigate } from '@reach/router';
import './NewPost.css';

export default function NewPost(props: NewPostProps) {

  const mdService: MarkdownService = props.markdownService;
  const postService: PostService = props.postService;

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

  function stripTitle(input: string): string {
    const strippedText = input.replace(/['!"#$%&\\'()*+,\-./:;<=>?@[\\\]^_`{|}~']/g,"");
    
    const result = strippedText.replace(/ /gi, '-');

    return result.toLowerCase();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){

    const model: PostModel = {
      id: 10,
      titleKey: stripTitle(postTitle),
      title: postTitle,
      body: inputText,
      date: moment().toDate()
    }

    postService.addPost(model);
    props.onPostComplete();
    navigate('/');

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
  postService: PostService;
  markdownService: MarkdownService;
  onPostComplete: () => void;
}