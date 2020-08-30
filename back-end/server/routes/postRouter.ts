import Express from 'express';
import { getAllPosts, addPost, getPostByTitle } from '../services'
import { PostModel } from '../models';

let router = Express.Router();

router.get('/posts', async function(req, res) {

  let posts = await getAllPosts();
  res.status(200).send(posts);
});

router.get('/posts/:title', async function(req, res) {

  const post = await getPostByTitle(req.params.title);
  console.log(post);
  if(post === undefined) {
    res.status(404).send('not found');
  }

  res.status(200).send(post);
});

router.post('/posts', async function(req, response) {

  try {
    const post: PostModel = req.body.post;
    await addPost(post);
    response.status(201);
  }
  catch (e) {
    response.status(404).send(e.message);
  }
});

export default router;