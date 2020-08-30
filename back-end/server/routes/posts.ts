import Express from 'express';
import PostService from '../services/postService'

const postService = new PostService();

let router = Express.Router();

router.get('/posts', function(req, res) {
  let posts = postService.getPosts();


  res.send(posts);
});

export default router;