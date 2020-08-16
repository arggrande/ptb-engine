import React from 'react';
import './Post.css'

function Post(props: PostProps) {

    return (
        <article className='article' >
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </article>
        
    )
}

interface PostProps {
    imageUri?: string;
    title: string;
    body: string;
}

export default Post;