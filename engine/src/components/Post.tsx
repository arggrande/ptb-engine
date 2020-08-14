import React from 'react';

interface PostProps {
    imageUri?: string;
    title: string;
    body: string;
}

function Post(props: PostProps) {

    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </article>
        
    )
}

export default Post;