import Express from 'express';
import { getAllPosts, addPost } from '../services'


let router = Express.Router();

router.get('/posts', async function(req, res) {
  let posts = await getAllPosts();


  res.send(posts);
});

router.post('/posts', async function(req, response) {
  console.log('posted to posts. ha.');
  
  // can i strongly type req.body?
  console.log(req.body);
  
  // todo: look into how i progress the response from here?
});

export default router;