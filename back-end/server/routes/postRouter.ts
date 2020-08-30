import Express from 'express';
import { getAllPosts, addPost, getPostByTitle } from '../services'


let router = Express.Router();

router.get('/posts', async function(req, res) {
  let posts = await getAllPosts();


  res.send(posts);
});

router.get('/posts/:title', async function(req, res) {
  console.log(`getting title: ${req.params.title}`);
  const post = await getPostByTitle(req.params.title);
  res.send(post);
});

router.post('/posts', async function(req, response) {
  console.log('posted to posts. ha.');
  
  // can i strongly type req.body?
  console.log(req.body);
  
  // todo: look into how i progress the response from here?
});

export default router;