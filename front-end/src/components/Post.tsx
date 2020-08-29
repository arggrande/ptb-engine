import React from 'react';
import MarkdownService from '../services/markdownService';
import PostService from '../services/postService';
import moment from 'moment';
import Constants from '../helpers/constants';
import {RouteComponentProps} from '@reach/router';

import './Post.css'
import { PostModel } from '../models/PostModel';
import NotFound from './NotFound';

function Post(props: PostProps) {
    const markdownService: MarkdownService = new MarkdownService();
    const postService: PostService = new PostService();

    const post: PostModel | undefined = postService.getPostByTitle(props.titleKey ?? 'notfound');

    if(post === undefined) {
        // reroute to 404 page
        // need to add test that tests for this
        return (<NotFound />)
    }

    const parsedBody = markdownService.parse(post.body)
    const RenderedBody = () => <div dangerouslySetInnerHTML={{__html: parsedBody}}></div>

    return (
        <article className='article' >
            <h4>{moment(post.date).format(Constants.DefaultDateFormat)}</h4>
            <h3>{post.title}</h3>
            <RenderedBody />
        </article>
        
    )
}

interface PostProps extends RouteComponentProps {
    titleKey?: string;
}

export default Post;