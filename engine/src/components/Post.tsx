import React from 'react';
import './Post.css'
interface PostProps {
    imageUri?: string;
    title: string;
    body: string;
}

function Post(props: PostProps) {

    return (
        <article className='article' >
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </article>
        
    )
}

export default Post;