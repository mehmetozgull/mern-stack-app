import express from 'express';
import { posts, create, update, remove } from '../controllers/post.js';

const router = express.Router();

router.get('/posts', posts)
router.post('/create', create)
router.patch('/update/:id', update)
router.delete('/delete/:id', remove)





export default router;