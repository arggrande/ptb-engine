import Express from 'express';

let router = Express.Router();

router.get('/posts', function(req, res) {
  res.send('hooray posts!');
});

export default router;