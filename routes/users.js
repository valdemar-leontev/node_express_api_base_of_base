import express from 'express';
import { createUser, deleteUser, getCurrentUser, getUserList, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUserList);

router.get('/:id', getCurrentUser);

router.post('/', createUser); 

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;