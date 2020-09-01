import Express from 'express';
import { getAllPosts, addPost, getPostByTitle } from '../services'
import { PostModel } from '../models';
import { checkJwt } from '../middleware'
let router = Express.Router();

router.get('/', async function(req, res) {

  let posts = await getAllPosts();
  res.status(200).send(posts);
});

// mount auth here
router.use(checkJwt);

router.get('/:title', async function(req, res) {

  const post = await getPostByTitle(req.params.title);
  if(post === undefined) {
    res.status(404).send('not found');
  }

  res.status(200).send(post);
});

router.post('/', async function(req, response) {

  try {
    const post: PostModel = req.body;
    post.date = new Date();
    await addPost(post);
    response.status(201).send();
  }
  catch (e) {
    response.status(404).send(e.message);
  }
});

export default router;