import Express from 'express';
import PostService from '../services/postService'

const postService = new PostService();

let router = Express.Router();

router.get('/posts', function(req, res) {
  let posts = postService.getPosts();


  res.send(posts);
});

router.post('/posts', function(req, response) {
  console.log('posted to posts. ha.');
  
  // can i strongly type req.body?
  console.log(req.body);
  
  // todo: look into how i progress the response from here?
});

export default router;